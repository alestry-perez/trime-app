import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { AppPage } from '../components/AppPage.js';

export let YouDidItPage = ({ navigation }) => {
  return (
    <AppPage
      navigation={navigation}
      heading=""
      nextScreen="Next"
      previousScreen="Payment"
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/pics/youdidit-img.png')}
        />
        <Text style={styles.largeText}>You did it!</Text>
        <Text style={styles.text}>
          You have now created your profile! We are now going to give you your
          best matches.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's go!</Text>
        </TouchableOpacity>
      </View>
    </AppPage>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },

  image: {
    marginVertical: 40,
  },

  largeText: {
    fontSize: 36,
    fontWeight: '800',
    paddingVertical: 15,
  },

  text: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '200',
    paddingHorizontal: 90,
    paddingBottom: 50,
    fontSize: 14,
  },

  button: {
    backgroundColor: '#FFB500',
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
