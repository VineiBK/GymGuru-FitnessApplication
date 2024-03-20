import React from 'react'
//AuthStack is for the navigator around the application before reaching the Home screen.
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //react navigator

//Screens which will appear before the Home screen
import OnboardingScreen from '../screens/OnboardingScreen'; //first screen which will pop up when npm is started on android
import FirstPage from '../screens/FirstPage'; //Onboarding to first
import SecondPage from '../screens/SecondPage'; //first to second and second to third
import ThirdPage from '../screens/ThirdPage'; //third page will lead to Login screen
import LoginScreen from '../screens/LoginScreen'; 
import RegisterScreen from '../screens/RegisterScreen'; 
import AgeSelectorScreen from './SelectorScreens/AgeSelectorScreen';
import WeightSelectorScreen from './SelectorScreens/WeightSelectorScreen';
import HeightSelectorScreen from './SelectorScreens/HeightSelectorScreen';
import GenderSelectorScreen from './SelectorScreens/GenderSelectorScreen';
import GoalSelectorScreen from './SelectorScreens/GoalSelectorScreen';
import LoadingScreen from './SelectorScreens/LoadingScreen';
import TrainerScreen from './SelectorScreens/TrainerScreen';
import OtherTrainerScreen from './SelectorScreens/OtherTrainerScreen';


const Stack = createNativeStackNavigator(); //creating the stack

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}> 
        <Stack.Screen component={OnboardingScreen} name="Onboarding"/>
        <Stack.Screen component={FirstPage} name="First"/>
        <Stack.Screen component={SecondPage} name="Second"/>
        <Stack.Screen component={ThirdPage} name="Third" />
        <Stack.Screen component={LoginScreen} name="Login"/>
        <Stack.Screen component={RegisterScreen} name="Register"/>
        <Stack.Screen component={AgeSelectorScreen} name="AgeSelector"/>
        <Stack.Screen component={WeightSelectorScreen} name="WeightSelector"/>
        <Stack.Screen component={HeightSelectorScreen} name="HeightSelector"/>
        <Stack.Screen component={GenderSelectorScreen} name="GenderSelector"/>
        <Stack.Screen component={GoalSelectorScreen} name="GoalSelector"/>
        <Stack.Screen component={LoadingScreen} name="LoadingScreen" />
        <Stack.Screen component={TrainerScreen} name="TrainerScreen" />
        <Stack.Screen component={OtherTrainerScreen} name="OtherTrainerScreen" />
      </Stack.Navigator>
  );
};

export default AuthStack;