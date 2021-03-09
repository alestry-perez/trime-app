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

import { ScreenWithNext } from '../components/ScreenWithNext';
import { NumberScroll } from '../components/NumberScroll';

import colors from '../config/colors';

export let WhoAreYouPage = ({ navigation }) => {
  return (
    <ScreenWithNext
      navigation={navigation}
      heading="Lets Start"
      nextScreen="Interest"
    >
      <View style={styles.container}>
        {/* <Image
          style={styles.background}
          source={require('../assets/background.png')}
        /> */}
        <View style={styles.profileSection}>
          <Image source={require('../assets/profile-ellipse.png')} />
          <Image
            style={styles.profilePicture}
            source={require('../assets/profile-picture.png')}
          />
          <Image
            style={styles.profileSubtext}
            source={require('../assets/profile-subtext.png')}
          />
        </View>
      </View>
      <NumberScroll />
    </ScreenWithNext>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: colors.white,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingTop: Platform.OS === ['ios, android'] ? StatusBar.currentHeight : 0,
  // },
  background: {
    top: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSection: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -45,
  },
  profilePicture: {
    bottom: 135,
  },
  profileSubtext: {
    bottom: 85,
  },
});
