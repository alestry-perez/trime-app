import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Button,
  Text,
  TouchableHighlight,
} from 'react-native';

import { HeightScroll } from '../components/HeightScroll';
import { WeightScroll } from '../components/WeightScroll';
import { ScreenWithNext } from '../components/ScreenWithNext';

import colors from '../config/colors';

export let BaseInfoPage = ({ navigation }) => {
  let [selected, setSelected] = useState(false);
  let onPress = () => {
    setSelected(!selected);
  };
  return (
    <ScreenWithNext
      navigation={navigation}
      heading="Base Information"
      nextScreen="Interest"
    >
      <View style={styles.container}>
        <Image source={require('../assets/heightpicture.png')} />
      </View>

      <View style={styles.hScroll}>
        <HeightScroll />
        <Text style={styles.infoText}>cm</Text>
        <Image
          style={styles.outline}
          source={require('../assets/outline.png')}
        />
      </View>
      <View style={styles.wScroll}>
        <WeightScroll />
        <Text style={styles.infoText}>kg</Text>
        <Image
          style={styles.outline}
          source={require('../assets/outline.png')}
        />
      </View>
    </ScreenWithNext>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outline: {
    top: 47,
    alignSelf: 'center',
    position: 'absolute',
  },
  infoText: {
    color: colors.primary,
    left: 35,
    top: -30,
    bottom: 24,
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
  },
  hScroll: {
    top: 50,
  },
  wScroll: {
    bottom: 1,
  },
});
