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
        <View style={styles.profilesection}>
          <Image source={require('../assets/profile-ellipse.png')} />
          <Image
            style={styles.profilepicture}
            source={require('../assets/profile-picture.png')}
          />
          <Image
            style={styles.profilesubtext}
            source={require('../assets/profile-subtext.png')}
          />
        </View>
      </View>
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
  profilesection: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -45,
  },
  profilepicture: {
    bottom: 135,
  },
  profilesubtext: {
    bottom: 85,
  },
});
