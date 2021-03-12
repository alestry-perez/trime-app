import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Button,
  Text,
  TouchableHighlight,
} from 'react-native';

import { GenSelect } from '../components/GenSelect';
import { NumberScroll } from '../components/NumberScroll';
import { ScreenWithNext } from '../components/ScreenWithNext';

import colors from '../config/colors';

export let WhoAreYouPage = ({ navigation }) => {
  let [selected, setSelected] = useState(false);
  let onPress = () => {
    setSelected(!selected);
  };
  return (
    <ScreenWithNext
      navigation={navigation}
      heading="Lets Start"
      nextScreen="BaseInfo"
    >
      <View style={styles.container}>
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
        <GenSelect />
      </View>
    </ScreenWithNext>
  );
};

const styles = StyleSheet.create({
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
