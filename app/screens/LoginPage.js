import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Button,
  Platform,
  StatusBar,
} from 'react-native';

import ButtonComponent, {
  CircleButton,
  RoundButton,
  RectangleButton,
} from 'react-native-button-component';

import colors from '../config/colors';

function LoginPage(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require('../assets/background.png')}
      />
      <Image
        style={styles.loginpic}
        source={require('../assets/trime-login-pic.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === ['ios, android'] ? StatusBar.currentHeight : 0,
  },
  background: {
    top: 225,
  },
  loginpic: {
    top: -575,
  },
});

export default LoginPage;
