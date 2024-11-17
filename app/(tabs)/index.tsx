import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useRouter } from 'expo-router'
import Slider from "../../components/Slider";
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from '../../constants/Colors'

// Define the type for the navigation stack
/*type RootStackParamList = {
  Dashboard: undefined;
  Chat: undefined; // Add other routes as needed
};*/

// Define the navigation prop type for the Dashboard screen
//type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const { width, height } = Dimensions.get('window')

export default function Dashboard() {
    const router = useRouter()

    return (
        <LinearGradient
            colors={['#A8E6FF', '#FEEAB8']} // Gradient colors
            style={styles.container}
        >
            <ScrollView>
                <View >
                    <Text style={styles.header}> 
                        Let's talk Movies. 
                    </Text>
                </View>

                {/* Talk to Nima: direct to chat */}
                <View style={{ width: '100%' }}>
                    <View
                        style={{
                            backgroundColor: Colors.bubble_background,
                            borderRadius: 16,
                            paddingHorizontal: 16,
                            paddingVertical: 16,
                            margin: 16,
                            alignItems: 'center',
                        }}
                        onTouchEnd={() => router.push('/(tabs)/chat')}
                    >
                        <View>
                            <Text style={styles.subHeader}>
                                Talk to NIMA
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ gap: 16 }}>
                    <Text style={styles.subHeader}>
                        Popular Questions
                    </Text>
                    <View
                        style={styles.bubbleButton}
                        onTouchEnd={() => router.push('/(tabs)/chat')}
                    >
                        <Text style={{ fontWeight: '500' }}>
                            {'\u{1F9D9}'} Summarize the first Harry Potter movie
                        </Text>
                    </View>
                    <View
                        style={styles.bubbleButton}
                        onTouchEnd={() => router.push('/(tabs)/chat')}
                    >
                        <Text style={{ fontWeight: '500' }}>
                            {'\u{1F384}'} Recommend some Christmas movies
                        </Text>
                    </View>
                    <View
                        style={styles.bubbleButton}
                        onTouchEnd={() => router.push('/(tabs)/chat')}
                    >
                        <Text style={{ fontWeight: '500' }}>
                            {'\u{1F37F}'} What new movies are coming out this month?
                        </Text>
                    </View>
                    <View
                        style={styles.bubbleButton}
                        onTouchEnd={() => router.push('/(tabs)/chat')}
                    >
                        <Text style={{ fontWeight: '500' }}>
                            {'\u{1F4BB}'} What is NIMA?
                        </Text>
                    </View>
                </View>
                <View style={styles.slider} >
                    <Text style={styles.subHeader}>
                        Explore Noteworthy Titles
                    </Text>
                    <Slider />
                </View>
                
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold', 
        fontSize: 35, 
        paddingTop: 30,
        paddingHorizontal: 20, // Same horizontal padding as bubble
        paddingVertical: 1, 
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        marginTop: 20,
        marginBottom: 200, //bottom of screen, change to necessary
    },
    subHeader: {
        fontWeight: 'bold', 
        fontSize: 20, 
        paddingHorizontal: 20, // Same horizontal padding as bubble
        paddingVertical: 1,
    },
    bubbleButton: {
        backgroundColor: Colors.teal,
        fontSize: 20,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginHorizontal: 16,
        alignItems: 'flex-start',
        opacity: 0.95,
    },
    image: {
        width: width * 1,
        height: height * 0.75,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
})
