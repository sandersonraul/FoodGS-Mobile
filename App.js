import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes, { BottomNavigation } from './src/routes';
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode } 

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#004AAD" />
      <Routes />
    </NavigationContainer>
  );
}
