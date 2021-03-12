import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

// so make items an array or something, so the selected state will point to exact item(index, for example)

//  this is state
// const [state, setState] = useState(false);

export let GenSelect = ({ value, style }) => {
  let [selected, setSelected] = useState(false);
  const onPress = () => {
    setSelected(!selected);
  };

  return (
    <View style={styles.genIcon}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.boxes,
            {
              color: selected ? 'black' : 'white',
              backgroundColor: selected ? '#FFB424' : '#E8E8E8',
            },
          ]}
        >
          <Image source={require('../assets/genX.png')} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.boxes,
            {
              color: selected ? 'black' : 'white',
              backgroundColor: selected ? '#FFB424' : '#E8E8E8',
            },
          ]}
        >
          <Image source={require('../assets/gen.png')} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.boxes,
            {
              color: selected ? 'black' : 'white',
              backgroundColor: selected ? '#FFB424' : '#E8E8E8',
            },
          ]}
        >
          <Image source={require('../assets/genY.png')} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.boxes,
            {
              color: selected ? 'black' : 'white',
              backgroundColor: selected ? '#FFB424' : '#E8E8E8',
            },
          ]}
        >
          <Image source={require('../assets/genO.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  boxes: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 70,
    width: 70,
  },
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
