import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useRouter } from 'expo-router'
import Slider from "../../components/Slider";

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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={require('../../assets/nima-logo.png')}
                    style={{ width: 200, height: 200 }}
                    resizeMode='contain'
                />
                <Image
                    source={require('../../assets/cat-logo.png')}
                    style={{ width: 100, height: 100 }}
                    resizeMode='contain'
                />
            </View>

            <View>
              <Slider />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Image
                    src='https://i.ebayimg.com/images/g/E8AAAOSw1WdjNvus/s-l1200.jpg'
                    style={{ width: 100, height: 180 }}
                    resizeMode='contain'
                />
                <Image
                    src='https://i.ebayimg.com/images/g/E8AAAOSw1WdjNvus/s-l1200.jpg'
                    style={{ width: 150, height: 200 }}
                    resizeMode='contain'
                />
                <Image
                    src='https://i.ebayimg.com/images/g/E8AAAOSw1WdjNvus/s-l1200.jpg'
                    style={{ width: 100, height: 180 }}
                    resizeMode='contain'
                />
            </View>
            <View style={{ gap: 16 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    Popular Questions
                </Text>
                <View
                    style={{
                        backgroundColor: '#FFF',
                        borderRadius: 16,
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                    }}
                    onTouchEnd={() => router.push('/(tabs)/chat')}
                >
                    <Text style={{ fontWeight: '500' }}>What is NIMA?</Text>
                </View>
                <View
                    style={{
                        backgroundColor: '#FFF',
                        borderRadius: 16,
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                    }}
                    onTouchEnd={() => router.push('/(tabs)/chat')}
                >
                    <Text style={{ fontWeight: '500' }}>
                        Recommend the Christmas Movie
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: '#FFF',
                        borderRadius: 16,
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                    }}
                    onTouchEnd={() => router.push('/(tabs)/chat')}
                >
                    <Text style={{ fontWeight: '500' }}>
                        Summary Harry Potter
                    </Text>
                </View>
            </View>

            {/* Create the bubble for the button */}
            <View style={{ width: '100%' }}>
                <View
                    style={{
                        backgroundColor: '#FFF',
                        borderRadius: 16,
                        paddingHorizontal: 16,
                        paddingVertical: 16,
                        margin: 16,
                        alignItems: 'center',
                    }}
                    onTouchEnd={() => router.push('/(tabs)/chat')}
                >
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            Talk to NIMA
                        </Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bubble: {
        backgroundColor: '#FFF',
        borderRadius: 50,
        padding: 20,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 169, // Adjust this value to position vertically
        left: 80, // This will align the bubble towards the left-hand side
    },
    bubbleText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
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
