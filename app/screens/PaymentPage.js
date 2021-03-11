import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScreenWithNext } from '../components/ScreenWithNext';

export let PaymentPage = ({ navigation }) => {
  return (
    <ScreenWithNext
      navigation={navigation}
      heading="Select a Payment Method"
      nextScreen="YouDidIt"
      previousScreen="LetsGo"
    >
      <View style={styles.cardContainer}>
        <View style={styles.cards}>
          <View style={styles.cardone}>
            <Text style={styles.cardText}>Another payment</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cards}>
          <View style={styles.cardone}>
            <Text style={styles.cardText}>Swish</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cards}>
          <View style={styles.cardone}>
            <Text style={styles.cardText}>Credit Card</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWithNext>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 20,
    marginBottom: 290,
  },

  cardText: {
    fontSize: 16,
    fontWeight: '200',
    color: '#000',
    marginLeft: 20,
  },

  cards: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    width: '100%',
    height: 80,
    padding: 10,
    borderRadius: 8,
    shadowOffset: { width: 3, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },

  cardone: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: '#FFB500',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '700',
  },
});
