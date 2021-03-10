import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import colors from '../config/colors';

export let NumberScroll = () => {
  const [number, setNumber] = useState([
    { name: '18', key: '1' },
    { name: '19', key: '2' },
    { name: '20', key: '3' },
    { name: '21', key: '4' },
    { name: '22', key: '5' },
    { name: '23', key: '6' },
    { name: '24', key: '7' },
    { name: '25', key: '8' },
    { name: '26', key: '9' },
    { name: '27', key: '10' },
    { name: '28', key: '11' },
    { name: '29', key: '12' },
    { name: '30', key: '13' },
    { name: '31', key: '14' },
    { name: '32', key: '15' },
    { name: '33', key: '16' },
    { name: '34', key: '17' },
    { name: '35', key: '18' },
    { name: '36', key: '19' },
    { name: '37', key: '20' },
    { name: '38', key: '21' },
    { name: '39', key: '22' },
    { name: '40', key: '23' },
    { name: '41', key: '24' },
    { name: '42', key: '25' },
    { name: '43', key: '26' },
    { name: '44', key: '27' },
    { name: '45', key: '28' },
    { name: '46', key: '29' },
    { name: '47', key: '30' },
    { name: '48', key: '31' },
    { name: '49', key: '32' },
    { name: '50', key: '33' },
    { name: '51', key: '34' },
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
    marginTop: 24,
    padding: 24,
    fontSize: 69,
    fontWeight: '800',
    alignSelf: 'center',
    color: colors.primary,
  },
});
