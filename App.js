import React from 'react';

import 'react-native-gesture-handler';

import { LoginPage } from './app/screens/LoginPage.js';
import { WhoAreYouPage } from './app/screens/WhoAreYouPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { InterestSelectPage } from './app/screens/InterestSelectPage';
import { FitnessLevelPage } from './app/screens/FitnessLevelPage';
import { PickYourPTPage } from './app/screens/PickYourPTPage';
import { SetGoalsPage } from './app/screens/SetGoalsPage';
import { LoginTwoPage } from './app/screens/LoginTwoPage';
import { LetsGoPage } from './app/screens/LetsGoPage';
import { PaymentPage } from './app/screens/PaymentPage';

const Stack = createStackNavigator();

let LogoTitle = () => {
  return null;
};

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="LoginPage" component={LoginPage} /> */}
        {/* <Stack.Screen name="WhoAreYou" component={WhoAreYouPage} /> */}
        <Stack.Screen name="Interest" component={InterestSelectPage} />
        <Stack.Screen name="PT" component={PickYourPTPage} />
        <Stack.Screen name="FitnessLevel" component={FitnessLevelPage} />
        <Stack.Screen name="SetGoals" component={SetGoalsPage} />
        <Stack.Screen name="LoginTwo" component={LoginTwoPage} />
        <Stack.Screen name="LetsGo" component={LetsGoPage} />
        <Stack.Screen name="Payment" component={PaymentPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
