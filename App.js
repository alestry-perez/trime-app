import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {InterestSelectPage} from "./app/screens/InterestSelectPage";
import {FitnessLevelPage} from "./app/screens/FitnessLevelPage";
import {PickYourPTPage} from "./app/screens/PickYourPTPage";
import {SetGoalsPage} from "./app/screens/SetGoalsPage";


const Stack = createStackNavigator();

let LogoTitle = () => {
  return null;
}

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name="Interest" component={InterestSelectPage} />
        <Stack.Screen name="PT" component={PickYourPTPage} />
        <Stack.Screen name="FitnessLevel" component={FitnessLevelPage} />
        <Stack.Screen name="SetGoals" component={SetGoalsPage} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};









