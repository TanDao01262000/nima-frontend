import React from 'react';
import { ImageBackground } from 'react-native';

export default function Dashboard() {
  return (
    <ImageBackground 
      source={require('/Users/nina/nima-frontend/assets/Nima2.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    />
  );
}
