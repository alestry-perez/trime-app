import { View, Text } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { styles } from '../assets/styles';

<<<<<<< HEAD
export let RangeSlider = ({ label }) => {
  return (
    <View>
      <View style={styles.labelStyles}>
        <Text>{label}</Text>
      </View>
      <Slider
        style={{ width: 400, height: 70 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFB424"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFB424"
      />
=======
export let RangeSlider = ({label}) => {
    return <View>
        <View style={styles.labelStyles}>
            <Text style={styles.labelText}>{label}</Text>
        </View>
        <Slider
            style={{ width: 400, height: 60 }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FFB424"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFB424"
        />
>>>>>>> testRepoMerge
    </View>
  );
};
