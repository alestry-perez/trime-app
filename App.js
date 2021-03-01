import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  View,
  InteractionManager,
  Button,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 300 }}>
        <Image source={require('./assets/trime-tag.png')} />
      </View>
      <View style={{ height: 300 }}>
        <Image source={require('./assets/trime-subtext.png')} />
      </View>
      <Button title="Start" onPress={() => console.log('Button Tapped')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === ['ios, android'] ? StatusBar.currentHeight : 0,
  },
});
