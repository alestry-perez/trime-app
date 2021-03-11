import React, { useState } from 'react';
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';

export let GenSelect = () => {
  let [selected, setSelected] = useState(false);
  let onPress = () => {
    setSelected(!selected);
  };
  return (
    <View style={styles.genIcon}>
      <TouchableHighlight
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          height: 70,
          width: 70,
          backgroundColor: selected ? '#FFB424' : '#E8E8E8',
        }}
        activeOpacity={0.6}
        underlayColor=""
        onPress={onPress}
      >
        <Image source={require('../assets/genX.png')} />
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          height: 70,
          width: 70,
          backgroundColor: selected ? '#FFB424' : '#E8E8E8',
        }}
        activeOpacity={0.6}
        underlayColor=""
        onPress={onPress}
      >
        <Image source={require('../assets/gen.png')} />
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          height: 70,
          width: 70,
          backgroundColor: selected ? '#FFB424' : '#E8E8E8',
        }}
        activeOpacity={0.6}
        underlayColor=""
        onPress={onPress}
      >
        <Image source={require('../assets/genY.png')} />
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          height: 70,
          width: 70,
          backgroundColor: selected ? '#FFB424' : '#E8E8E8',
        }}
        activeOpacity={0.6}
        underlayColor=""
        onPress={onPress}
      >
        <Image source={require('../assets/genO.png')} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  genIcon: {
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 350,
    left: 40,
  },
});
