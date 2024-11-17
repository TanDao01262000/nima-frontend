import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Dashboard() {
  return (
    <>
    <Tabs.Screen options={{headerShown: false}}/>
    <ImageBackground 
      source={require('../../assets/Nima2.png')}
      style={styles.container}
      resizeMode="cover"
    />
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
