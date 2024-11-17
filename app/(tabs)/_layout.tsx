import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";
import { View, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarStyle: {
        backgroundColor: Colors.gray,
        position: 'absolute',
         bottom: 40,
         justifyContent: 'center',
         alignSelf: 'center',
         height: 63,
         marginHorizontal: 100,
         paddingHorizontal: 10,
         paddingVertical: 6,
         paddingBottom: 6,
         borderRadius: 40,
         borderWidth: 1,
         borderTopWidth: 1,
         borderColor: Colors.gray,
         borderTopColor: Colors.gray,
         opacity: .8,
      },
      tabBarShowLabel: false,
      tabBarInactiveTintColor: Colors.gray,
      tabBarActiveTintColor: Colors.white, 
      headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                padding: 8,
                borderRadius: 20,
                backgroundColor: focused ? Colors.tint_color : Colors.gray
              }}
            >
            <FontAwesome size={28} name="home"/>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                padding: 8,
                borderRadius: 20,
                backgroundColor: focused ? Colors.tint_color : Colors.gray
              }}
            >
              <FontAwesome size={28} name="comments" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Contact Us",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                padding: 8,
                borderRadius: 20,
                backgroundColor: focused ? Colors.tint_color : Colors.gray
              }}
            >
              <FontAwesome size={28} name="info" />
            </View>
            // icon name="info" from name="cog"
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({

});