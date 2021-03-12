import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import colors from '../config/colors';

export let HeightScroll = () => {
  const [number, setNumber] = useState([
    { name: '150', key: '1' },
    { name: '151', key: '2' },
    { name: '152', key: '3' },
    { name: '153', key: '4' },
    { name: '154', key: '5' },
    { name: '155', key: '6' },
    { name: '156', key: '7' },
    { name: '157', key: '8' },
    { name: '158', key: '9' },
    { name: '159', key: '10' },
    { name: '160', key: '11' },
    { name: '161', key: '12' },
    { name: '162', key: '13' },
    { name: '163', key: '14' },
    { name: '164', key: '15' },
    { name: '165', key: '16' },
    { name: '166', key: '17' },
    { name: '167', key: '18' },
    { name: '168', key: '19' },
    { name: '169', key: '20' },
    { name: '170', key: '21' },
    { name: '171', key: '22' },
    { name: '172', key: '23' },
    { name: '173', key: '24' },
    { name: '174', key: '25' },
    { name: '175', key: '26' },
    { name: '176', key: '27' },
    { name: '177', key: '28' },
    { name: '178', key: '29' },
    { name: '179', key: '30' },
    { name: '180', key: '31' },
    { name: '190', key: '32' },
    { name: '200', key: '33' },
    { name: '300', key: '34' },
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
    left: -41,
    marginTop: 24,
    padding: 24,
    fontSize: 69,
    fontWeight: '800',
    alignSelf: 'center',
    color: colors.primary,
  },
});
