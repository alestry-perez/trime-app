import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

function GenSelect({ style }) {
  let [selected, setSelected] = useState(false);
  let onPress = () => {
    setSelected(!selected);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      underlayColor=""
      onPress={onPress}
      style={{ backgroundColor: selected ? '#FFB424' : '#E8E8E8' }}
    >
      <View style={styles.boxes}>
        <Image />
      </View>
    </TouchableOpacity>
  );
}

export function boxSelect({ box, style }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}
    >
      {box.map((tag) => {
        return <GenSelect key={tag} value={tag} style={style} />;
      })}
    </View>
  );
}

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
