import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export let NumberScroll = ({}) => {
  const [number, setNumber] = useState([
    { name: '1', key: '1' },
    { name: '2', key: '2' },
    { name: '3', key: '3' },
    { name: '4', key: '4' },
    { name: '5', key: '5' },
    { name: '6', key: '6' },
    { name: '7', key: '7' },
  ]);

  return (
    <ScrollView horizontal={true}>
      {number.map((item) => (
        <View key={item.key}>
          <Text style={styles.itemScroll}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemScroll: {
    marginTop: 24,
    padding: 24,
    fontSize: 24,
    backgroundColor: 'pink',
  },
});
