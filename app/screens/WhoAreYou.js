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

function WhoAreYou(props) {
  return (
    <Image
      style={styles.background}
      source={require('../assets/background.png')}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === ['ios, android'] ? StatusBar.currentHeight : 0,
  },
});

export default WhoAreYou;
