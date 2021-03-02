import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Button,
  Platform,
  StatusBar,
} from 'react-native';

import colors from '../config/colors';

function LoginPage(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require('../assets/background.png')}
      />
      <View style={styles.buttons}>
        <View style={styles.abutton}>
          <Button
            onPress={() => console.log('Button Tapped')}
            title="Continue with Apple"
          />
        </View>
        <View style={styles.gbutton}>
          <Button
            onPress={() => console.log('Button Tapped')}
            title="Continue with Google"
          />
        </View>
        <View style={styles.fbutton}>
          <Button
            onPress={() => console.log('Button Tapped')}
            title="Continue with Facebook"
          />
        </View>
        <View style={styles.ebutton}>
          <Button
            onPress={() => console.log('Button Tapped')}
            title="Continue with Email"
          />
        </View>
      </View>
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
    top: 315,
  },
  loginpic: {
    top: -675,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  abutton: {
    backgroundColor: colors.white,
    borderRadius: 14,
    margin: 5,
  },
  gbutton: {
    backgroundColor: colors.white,
    borderRadius: 14,
    margin: 5,
  },
  fbutton: {
    backgroundColor: colors.facebook,
    borderRadius: 14,
    margin: 5,
  },
  ebutton: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    margin: 5,
  },
});

export default LoginPage;
