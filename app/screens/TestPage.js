import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNNumberSelector } from 'react-native-number-selector';
import { ScreenWithNext } from '../components/ScreenWithNext';

export let TestPage = ({ navigation }) => {
  return (
    <ScreenWithNext
      navigation={navigation}
      heading="Lets Start"
      nextScreen="Interest"
    >
      <Text>Open</Text>
      <RNNumberSelector
        key={1}
        style={{ left: 0, width: '100%', height: 50 }}
        items={[0, 1, 2, 3, 4, 5]}
        selectedItem={4}
        spacing={50}
        highlightedFontSize={25}
        fontSize={20}
        textColor={'#345345'}
        highlightedTextColor={'#634534'}
        viewAnimation={0}
        onChange={(number) => {
          console.log('selected: ' + number);
        }}
      />
    </ScreenWithNext>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
