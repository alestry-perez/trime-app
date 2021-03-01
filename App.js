import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  View,
  InteractionManager,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/trime-tag.png')} />
      <Image source={require('./assets/trime-subtext.png')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
