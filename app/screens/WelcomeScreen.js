import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  View,
  InteractionManager,
  Button,
  Platform,
  StatusBar,
} from 'react-native';

import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={{ top: 200, flex: 1 }}>
        <Image source={require('../assets/trime-tag.png')} />
      </View>
      <View style={{ top: 295, flex: 1 }}>
        <Image source={require('../assets/trime-subtext.png')} />
      </View>
      <View style={{ top: 130, flex: 1 }}>
        <Button title="Start" onPress={() => console.log('Button Tapped')} />
      </View>
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
});

export default WelcomeScreen;
