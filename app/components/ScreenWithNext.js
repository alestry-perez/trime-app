import { Button, View, StyleSheet } from 'react-native';
// import { styles } from '../assets/styles';
import React from 'react';
import { AppPage } from './AppPage';

export let ScreenWithNext = ({
  navigation: { navigate, goBack },
  children,
  heading,
  nextScreen,
  previousScreen,
}) => {
  return (
    <AppPage heading={heading}>
      <View>{children}</View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.roundButton}>
            <Button title="<" color="white" onPress={() => goBack()} />
          </View>

          <View style={styles.buttonStyle}>
            <Button
              title="NEXT >"
              color="white"
              onPress={() => navigate(nextScreen)}
            />
          </View>
        </View>
      </View>
    </AppPage>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 430,
    top: 600,
  },
  buttonContainer: {
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonStyle: {
    backgroundColor: 'black',
    width: 120,
    borderRadius: 18,
  },

  roundButton: {
    backgroundColor: 'black',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 100,
  },
});
