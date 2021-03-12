import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import colors from '../config/colors';

export let WeightScroll = () => {
  const [number, setNumber] = useState([
    { name: '50', key: '1' },
    { name: '51', key: '2' },
    { name: '52', key: '3' },
    { name: '53', key: '4' },
    { name: '54', key: '5' },
    { name: '55', key: '6' },
    { name: '56', key: '7' },
    { name: '57', key: '8' },
    { name: '58', key: '9' },
    { name: '59', key: '10' },
    { name: '60', key: '11' },
    { name: '61', key: '12' },
    { name: '62', key: '13' },
    { name: '63', key: '14' },
    { name: '64', key: '15' },
    { name: '65', key: '16' },
    { name: '66', key: '17' },
    { name: '67', key: '18' },
    { name: '68', key: '19' },
    { name: '69', key: '20' },
    { name: '70', key: '21' },
    { name: '71', key: '22' },
    { name: '72', key: '23' },
    { name: '73', key: '24' },
    { name: '74', key: '25' },
    { name: '75', key: '26' },
    { name: '76', key: '27' },
    { name: '77', key: '28' },
    { name: '78', key: '29' },
    { name: '79', key: '30' },
    { name: '80', key: '31' },
    { name: '81', key: '32' },
    { name: '82', key: '33' },
    { name: '83', key: '34' },
    { name: '∞', key: '35' },
  ]);

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      {number.map((item) => (
        <View key={item.key}>
          <Text style={styles.itemScroll}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemScroll: {
    left: 13,
    marginTop: 24,
    padding: 24,
    fontSize: 69,
    fontWeight: '800',
    alignSelf: 'center',
    color: colors.primary,
  },
});
