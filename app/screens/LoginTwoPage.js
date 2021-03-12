import React from 'react';
import { StyleSheet, Image, TextInput, View } from 'react-native';
import { ScreenWithNext } from '../components/ScreenWithNext';

export let LoginTwoPage = ({ navigation }) => {
  return (
    <ScreenWithNext
      navigation={navigation}
      heading="Let's start!"
      nextScreen="WhoAreYou"
      previousScreen="SetGoals"
    >
      <View style={styles.container}>
        <Image
          style={styles.loginImg}
          source={require('../assets/pics/login-two-img.png')}
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="E-mail"
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Re-Type Password"
            placeholderTextColor="black"
          />
        </View>
      </View>
    </ScreenWithNext>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },

  loginImg: {
    marginVertical: 40,
  },

  inputView: {
    width: '70%',
    height: 45,
    marginBottom: 5,
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  TextInput: {
    flex: 1,
    fontSize: 16,
  },
});
