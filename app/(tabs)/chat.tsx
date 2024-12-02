import {
  Pressable,
  TextInput,
  View,
  Animated,
  Keyboard,
  Easing,
  Platform,
  Text,
  ActivityIndicator,
  Alert,
  ImageBackground,
  Dimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useEffect, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Avatar } from "@rneui/themed";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Chat() {
  //const backendUrl = process.env.EXPO_PUBLIC_API_URL;
  const backendUrl = "http://localhost:8000";
  const [chatText, setChatText] = useState("");
  const [textInputHeight, setTextInputHeight] = useState(60);
  const [sendingChat, setSendingChat] = useState(false);
  const [conversation, setConversation] = useState<
    { role: String; content: string }[]
  >([]);
  const { question } = useLocalSearchParams();

  const router = useRouter();
  const translateYRef = useRef(new Animated.Value(0)).current;
  const tabBarHeight = useBottomTabBarHeight();

  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    if (typeof question=='string') {
      setChatText(question);
    }
    const keyboardWillShowListener = Keyboard.addListener(
      "keyboardWillShow",
      (event) => {
        const { height: newKeyboardHeight } = event.endCoordinates;
        Animated.timing(translateYRef, {
          toValue: tabBarHeight - newKeyboardHeight,
          duration: event.duration,
          easing: Easing.bezier(0.33, 0.66, 0.66, 1),
          useNativeDriver: false,
        }).start();
      }
    );

    const keyboardWillHideListener = Keyboard.addListener(
      "keyboardWillHide",
      (event) => {
        Animated.timing(translateYRef, {
          toValue: 0,
          duration: event.duration,
          easing: Easing.bezier(0.33, 0.66, 0.66, 1),
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  },[question]);

  const handleContentSizeChange = (event: {
    nativeEvent: { contentSize: { height: number } };
  }) => {
    setTextInputHeight(Math.max(event.nativeEvent.contentSize.height, 40));
  };

  const handleSubmit = async () => {
    const messageValue = chatText;
    setSendingChat(true);
    Keyboard.dismiss();
    if (messageValue.trim() === "") return;
    const newHumanMessage = {
      content: messageValue,
      role: "Human",
    };
    setConversation((prevConversation) => [
      ...prevConversation,
      newHumanMessage,
    ]);
    setChatText("");

    try {
      const response = await fetch(`${backendUrl}/nima`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: {
            question: messageValue,
            chat_history: [],
          },
          config: {
            metadata: {
              conversation_id: "conversationId",
              //question: "questionString"
            },
          },
        }),
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        const responseData = jsonResponse;

        console.log(responseData);
        const newAIMessage = {
          content: responseData.trimEnd(),
          role: "AI",
        };
        setConversation((prevConversation) => [
          ...prevConversation,
          newAIMessage,
        ]);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      setSendingChat(false);
      setChatText(messageValue);
      Alert.alert(
        "Could not connect to the server. Please navigate back and try again later."
      );
      console.error(error);
    }
    setSendingChat(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Full-screen Image Background */}
      <ImageBackground
        source={require('../../assets/Nima1.png')}
        style={{
          flex: 1, // Allow it to take up full screen
          justifyContent: "flex-end", // Ensure content appears at the bottom
        }}
        resizeMode="cover" // Cover the entire background
      >
        {/* Chat Messages */}
        <KeyboardAwareScrollView
          alwaysBounceVertical={false}
          style={{ flex: 1, marginTop: 50 }}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            {conversation && conversation.length > 0 && (
              <View className="my-4">
                {conversation.map((msg, index) =>
                  msg.role === "AI" ? (
                    <View
                      className="flex flex-row justify-start mb-2 items-center"
                      key={index}
                    >
                      <FontAwesome size={28} name="gear" color="blue" />
                      <View className="p-2 bg-dark-blue mx-2 rounded-lg w-4/5 bg-gray-500">
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 20,
                          }}
                          className="text-white"
                        >
                          {msg.content}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    <View
                      className="flex flex-row justify-end mb-2 items-center"
                      key={index}
                    >
                      <View
                        className="p-2 bg-dark-red mr-2 rounded-lg bg-red-500"
                        style={{ maxWidth: "85%" }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 20,
                          }}
                          className="text-white"
                        >
                          {msg.content}
                        </Text>
                      </View>
                      <Avatar
                        size={34}
                        rounded
                        title="U"
                        containerStyle={{
                          backgroundColor: "red",
                        }}
                      />
                    </View>
                  )
                )}
              </View>
            )}
          </View>
        </KeyboardAwareScrollView>

        {/* Chat Input */}
        <Animated.View
          style={{
            transform: [
              {
                translateY: Platform.OS === "ios" ? translateYRef : 0,
              },
            ],
            backgroundColor: "transparent",
            paddingHorizontal: 10,
            paddingVertical: 10,
            paddingBottom: 70,
            
          }}
        >
          <View className="flex-row items-center">
            <TextInput
              className="flex-1 border-2 rounded-xl border-gray-600 mr-4 px-3 max-h-20"
              multiline
              style={{ 
                height: textInputHeight,
                borderRadius: 20,
                textAlignVertical: 'center'
              }}
              value={chatText}
              onChangeText={(text) => setChatText(text)}
              placeholder="Message NIMA"
              onContentSizeChange={handleContentSizeChange}              
            />
            <Pressable
              style={{
                backgroundColor:
                  chatText.trim() === "" || sendingChat ? "gray" : "blue",
              }}
              className="items-center justify-center w-12 rounded-full p-2"
              onPress={handleSubmit}
              disabled={chatText.trim() === "" || sendingChat}
            >
              {sendingChat ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Feather name="send" size={20} color={"white"} />
              )}
            </Pressable>
          </View>
          <Pressable
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              backgroundColor: "blue",
              padding: 10,
              borderRadius: 50,
            }}
            onPress={() => router.push("/")} // Navigating to home
          >
            <Feather name="home" size={24} color="white" />
          </Pressable>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}
