import React from 'react';

import 'react-native-gesture-handler';

import { LoginPage } from './app/screens/LoginPage.js';
import { WhoAreYouPage } from './app/screens/WhoAreYouPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {InterestSelectPage} from "./app/screens/InterestSelectPage";
import {FitnessLevelPage} from "./app/screens/FitnessLevelPage";
import {PickYourPTPage} from "./app/screens/PickYourPTPage";
import {SetGoalsPage} from "./app/screens/SetGoalsPage";
import { TrainingDaysPage } from "./app/screens/TrainingDaysPage"
import { WhereDoYouTrainPage } from "./app/screens/WhereDoYouTrainPage"
import {BaseInfoPage} from "./app/screens/BaseInfoPage";
import {YouDidItPage} from "./app/screens/YouDidItPage";
import {PaymentPage} from "./app/screens/PaymentPage";
import {LoginTwoPage} from "./app/screens/LoginTwoPage";





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
        {/*<Stack.Screen name="LoginPage" component={LoginPage} /> */}
          <Stack.Screen name="LoginTwo" component={LoginTwoPage} />
        <Stack.Screen name="WhoAreYou" component={WhoAreYouPage} />
        <Stack.Screen name="BaseInfo" component={BaseInfoPage} />
        <Stack.Screen name="Interest" component={InterestSelectPage} />
        <Stack.Screen name="PT" component={PickYourPTPage} />
        <Stack.Screen name="FitnessLevel" component={FitnessLevelPage} />
        <Stack.Screen name="SetGoals" component={SetGoalsPage} />
        <Stack.Screen name="TrainingDays" component={TrainingDaysPage} />
        <Stack.Screen name="Map" component={WhereDoYouTrainPage} />
        <Stack.Screen name="YouDidIt" component={YouDidItPage} />
          <Stack.Screen name="Payment" component={PaymentPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
