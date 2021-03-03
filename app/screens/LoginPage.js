import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Button,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import colors from '../config/colors';

function LoginPage(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={require('../assets/background.png')}
        />
        <View style={styles.buttons}>
          <View style={styles.abutton}>
            <Image
              style={styles.icons}
              source={require('../assets/apple-icon.png')}
            />
            <Button
              color="black"
              onPress={() => console.log('Button Tapped')}
              title="Continue with Apple"
            />
          </View>
          <View style={styles.fbutton}>
            <Image
              style={styles.icons}
              source={require('../assets/fb-icon.png')}
            />
            <Button
              color="white"
              onPress={() => console.log('Button Tapped')}
              title="Continue with Facebook"
            />
          </View>
          <View style={styles.gbutton}>
            <Image
              style={styles.icons}
              source={require('../assets/google-icon.png')}
            />
            <Button
              color="black"
              onPress={() => console.log('Button Tapped')}
              title="Continue with Google"
            />
          </View>
          <View style={styles.ebutton}>
            <Image
              style={styles.icons}
              source={require('../assets/email-icon.png')}
            />
            <Button
              color="white"
              onPress={() => console.log('Button Tapped')}
              title="Continue with Email"
            />
          </View>
        </View>
        <Image
          style={styles.subtext}
          source={require('../assets/sub-text.png')}
        />
        <Image
          style={styles.loginpic}
          source={require('../assets/trime-login-pic.png')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === ['ios, android'] ? StatusBar.currentHeight : 0,
  },
  background: {
    top: 300,
  },
  loginpic: {
    bottom: 855,
  },
  buttons: {
    bottom: 190,
    width: 300,
  },
  icons: {
    bottom: 13,
    left: 20,
    position: 'absolute',
  },
  subtext: {
    bottom: 150,
  },
  abutton: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 5,
    marginTop: 8,
  },
  gbutton: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 5,
    marginTop: 8,
  },
  fbutton: {
    backgroundColor: colors.facebook,
    borderRadius: 14,
    padding: 5,
    marginTop: 8,
  },
  ebutton: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    padding: 5,
    marginTop: 8,
  },
});

export default LoginPage;
