import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Platform,
} from 'react-native';

function WelcomeScreen(props) {
  return (
    <Image
      style={styles.background}
      source={require('../app/assets/trimesplash.png')}
    ></Image>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
  },
});

export default WelcomeScreen;
