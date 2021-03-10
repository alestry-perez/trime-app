import React from 'react';
import { StyleSheet, Image, View, Button, Text } from 'react-native';

import { NumberScroll } from '../components/NumberScroll';
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
        <View>
          <NumberScroll />
          <Text style={styles.ageText}>years</Text>
          <Image
            style={styles.outline}
            source={require('../assets/outline.png')}
          />
        </View>
      </View>
    </ScreenWithNext>
  );
};

const styles = StyleSheet.create({
  // container: {
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
  outline: {
    top: 47,
    alignSelf: 'center',
    position: 'absolute',
  },
  ageText: {
    bottom: 24,
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
  },
});
