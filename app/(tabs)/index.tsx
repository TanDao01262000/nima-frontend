import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRouter } from 'expo-router';

// Define the type for the navigation stack
/*type RootStackParamList = {
  Dashboard: undefined;
  Chat: undefined; // Add other routes as needed
};*/

// Define the navigation prop type for the Dashboard screen
//type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const { width, height } = Dimensions.get('window');

export default function Dashboard() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#A8E6FF', '#FEEAB8']} // Gradient colors
      style={styles.container}
    >
    
    {/*title */}
      <Text style={styles.titleText}>{"NIMA"}</Text>

  {/* Speech bubble */}
    <View style= {styles.bubbleContainer}>
      <View style= {styles.bubble}>
        <Text style= {styles.bubbleText}>Let's talk movies</Text>
        <Button 
          title="Chat" 
          onPress={() => router.push('/chat')} />
    </View>
    {/* Pointer for the bubble */}
    <View style={styles.bubbleArrow}></View>
      </View>

      <Image
        source={require('../../assets/cat-logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
         </LinearGradient>
  );
}
      {/* Create the bubble for the button */}
      {/*<View style={styles.bubble}>
        <Text style={styles.bubbleText}>Let's talk movie</Text>
        <Button
          title="Chat"
          onPress={() => router.push("/(tabs)/chat")}
        /> 
      </View>*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  titleText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#FF785A',
    position: 'absolute',
    top: 40,
    paddingTop: 40,
  },

  bubbleContainer: {
    position: 'absolute',
    bottom: 270, // Adjust this to position the bubble above the cat
    alignItems: 'center',
    zIndex: 2,
    left: 40,
  },

  bubble: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 20,
    //marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    maxWidth: width * 0.6,
    zIndex: 2,
  },
    //justifyContent: 'center',
    //alignItems: 'center',
    //justifyContent: 'center',
    //position: 'absolute',
   // bottom: 169, // Adjust this value to position vertically
   // left: 80, // This will align the bubble towards the left-hand side
 
   bubbleArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 0.5,
    borderTopWidth: 26,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FFF',
    marginTop: -1,
    left: 10
  },

  bubbleText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  image: {
    width: width * 0.5,
    height: height * 0.3,
    //position: 'absolute',
    bottom: 1,
    right: 20,
    left: 10,
    zIndex: 1,
    paddingBottom: 400,
    
    //marginBottom: 40,
  },
},
);
  
 // welcomeText: {
    //fontSize: 24,
    //fontWeight: 'bold',
    //marginBottom: 20,
    //textAlign: 'center',

// import React from 'react'
// import { View, Text, Image, Dimensions, StyleSheet, Button } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient'
// import { useNavigation } from '@react-navigation/native'
// import { StackNavigationProp } from '@react-navigation/stack'
// import { useRouter } from 'expo-router'
// import Slider from "../../components/Slider";
// import { ScrollView } from 'react-native-gesture-handler'
// import { Colors } from '../../constants/Colors'

// // Define the type for the navigation stack
// /*type RootStackParamList = {
//   Dashboard: undefined;
//   Chat: undefined; // Add other routes as needed
// };*/

// // Define the navigation prop type for the Dashboard screen
// //type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

// const { width, height } = Dimensions.get('window')

// export default function Dashboard() {
//     const router = useRouter()

//     return (
//         <LinearGradient
//             colors={['#A8E6FF', '#FEEAB8']} // Gradient colors
//             style={styles.container}
//         >
//             <ScrollView>
//                 <View >
//                     <Text style={styles.header}>
//                         Let's talk Movies.
//                     </Text>
//                 </View>

//                 {/* Talk to Nima: direct to chat */}
//                 <View style={{ width: '100%' }}>
//                     <View
//                         style={styles.chatButton}
//                         onTouchEnd={() => router.push({
//                             pathname: '/(tabs)/chat',
//                             params: {question: ""}
//                         })}
//                     >
//                         <View>
//                             <Text style={styles.subHeader}>
//                                 Talk to NIMA
//                             </Text>
//                         </View>
//                     </View>
//                 </View>

//                 <View style={{ gap: 16 }}>
//                     <Text style={styles.subHeader}>
//                         Popular Questions
//                     </Text>
//                     <View
//                         style={styles.bubbleButton}
//                         onTouchEnd={() => router.push({
//                             pathname: '/(tabs)/chat',
//                             params : {question: "What new movies are coming out this month?"}
//                         })}
//                     >
//                         <Text style={{ fontWeight: '500' }}>
//                             {'\u{1F37F}'} What new movies are coming out this month?
//                         </Text>
//                     </View>
//                     <View
//                         style={styles.bubbleButton}
//                         onTouchEnd={() => router.push({
//                             pathname: '/(tabs)/chat',
//                             params : {question: "Summarize the first Harry Potter movie"}
//                         })}
//                     >
//                         <Text style={{ fontWeight: '500' }}>
//                             {'\u{1F9D9}'} Summarize the first Harry Potter movie
//                         </Text>
//                     </View>
//                     <View
//                         style={styles.bubbleButton}
//                         onTouchEnd={() => router.push({
//                             pathname: '/(tabs)/chat',
//                             params : {question: "Recommend some Christmas movies"}
//                         })}
//                     >
//                         <Text style={{ fontWeight: '500' }}>
//                             {'\u{1F384}'} Recommend some Christmas movies
//                         </Text>
//                     </View>
                    
//                     <View
//                         style={styles.bubbleButton}
//                         onTouchEnd={() => router.push({
//                             pathname: '/(tabs)/chat',
//                             params : {question: "What is Nima?"}
//                         })}
//                     >
//                         <Text style={{ fontWeight: '500' }}>
//                             {'\u{1F4BB}'} What is NIMA?
//                         </Text>
//                     </View>
//                 </View>
//                 <View style={styles.slider} >
//                     <Text style={styles.sliderHeader}>
//                         Explore Noteworthy Titles
//                     </Text>
//                     <Slider
                        
//                     />
//                 </View>

//             </ScrollView>
//         </LinearGradient>
//     )
// }

// const styles = StyleSheet.create({
//     header: {
//         fontWeight: 'bold',
//         fontSize: 35,
//         paddingTop: 100,
//         paddingHorizontal: 20, // Same horizontal padding as bubble
//         paddingVertical: 1,
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     slider: {
//         marginTop: 20,
//         marginBottom: 200, //bottom of screen, change to necessary
//     },
//     subHeader: {
//         fontWeight: 'bold',
//         fontSize: 20,
//         paddingHorizontal: 20, // Same horizontal padding as bubble
//         paddingVertical: 1,
//     },
//     bubbleButton: {
//         backgroundColor: Colors.teal,
//         fontSize: 20,
//         borderRadius: 16,
//         paddingHorizontal: 16,
//         paddingVertical: 10,
//         marginHorizontal: 16,
//         alignItems: 'flex-start',
//         opacity: 0.95,
//     },
//     chatButton: {
//         backgroundColor: Colors.bubble_background,
//         borderRadius: 16,
//         paddingHorizontal: 16,
//         paddingVertical: 16,
//         margin: 16,
//         alignItems: 'center',
//     },
//     image: {
//         width: width * 1,
//         height: height * 0.75,
//         marginBottom: 20,
//     },
//     sliderHeader: {
//         fontWeight: 'bold',
//         fontSize: 20,
//         paddingHorizontal: 20, 
//         paddingVertical: 1,
//         marginBottom: 15,
//     }
// })
