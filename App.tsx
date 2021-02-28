import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  console.log('App executed');

  return (
    <SafeAreaView style={styles.container}>
      <Text>Alestry App Running!</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/splash.png')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
