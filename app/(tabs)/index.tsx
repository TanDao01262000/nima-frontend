import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for the navigation stack
type RootStackParamList = {
  Dashboard: undefined;
  Chat: undefined; // Add other routes as needed
};

// Define the navigation prop type for the Dashboard screen
type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const { width, height } = Dimensions.get('window');

export default function Dashboard() {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  return (
    <LinearGradient
      colors={['#A8E6FF', '#FEEAB8']} // Gradient colors
      style={styles.container}
    >
      <Image
        source={require('/Users/quyenquyen/sampleExpo/nima-frontend/assets/Nima.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Create the bubble for the button */}
      <View style={styles.bubble}>
        <Text style={styles.bubbleText}>Go to Chat</Text>
        <Button
          title="Chat"
          onPress={() => navigation.navigate('Chat')}
        />
      </View>
    </LinearGradient>
  );
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
});
