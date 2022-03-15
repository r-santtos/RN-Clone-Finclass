import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#0d0d10', flex: 1}}>
      <StatusBar style='light' backgroundColor='transparent' />
      <Routes />
    </SafeAreaView>
  );
}