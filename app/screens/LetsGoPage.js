import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { ScreenWithNext } from '../components/ScreenWithNext';

export let LetsGoPage = ({ navigation }) => {
  return (
    <ScreenWithNext
      navigation={navigation}
      heading="Let's go!"
      nextScreen="Payment"
      previousScreen="LoginTwo"
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/pics/dudes.png')}
          style={styles.image}
        />
        <Text style={styles.largeText}>Welcome!</Text>
        <Text style={styles.text}>
          Let’s add some details to your profile, Or check out the app and
          comeback and do it later on.
        </Text>
      </View>
    </ScreenWithNext>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },

  image: {
    marginTop: 60,
    resizeMode: 'contain',
  },
  largeText: {
    fontSize: 36,
    fontWeight: '800',
    paddingTop: 40,
    paddingBottom: 15,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '200',
    paddingHorizontal: 90,
    paddingBottom: 20,
    fontSize: 14,
  },
});
