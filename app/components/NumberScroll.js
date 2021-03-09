import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export let NumberScroll = ({}) => {
  const [number, setNumber] = useState([
    { name: 'One', key: '1' },
    { name: 'Two', key: '2' },
    { name: 'Three', key: '3' },
    { name: 'Four', key: '4' },
    { name: 'Five', key: '5' },
    { name: 'Six', key: '6' },
    { name: 'Seven', key: '7' },
  ]);

  return (
    <ScrollView>
      {number.map((item) => (
        <View key={item.key}>
          <Text styles={{ fontSize: 54 }}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 40,
    // paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  itemScroll: {
    // marginTop: 24,
    // padding: 24,
    // backgroundColor: 'pink',
    // fontSize: 24,
  },
});
