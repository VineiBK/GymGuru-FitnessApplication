import { View, ActivityIndicator} from 'react-native'
import React, {useContext} from 'react'

//navigator and stack navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PointsProvider } from '../screens/PointsContext'; //Point System
import { ProgressProvider}from '../screens/ProgressContext'; //Progress System

import AuthStack from '../screens/AuthStack';
import AppStack from '../screens/AppStack';
import WorkoutStack from '../screens/WorkoutStack';
import { WorkoutsProvider } from '../screens/WorkoutsContext'; //Workout System
import { AudioProvider } from '../screens/AudioContext'; //Audio System

import {AuthContext} from '../screens/AuthContext';
import { UserProvider } from '../screens/UserContext';

function AppNav () {
    const {isLoading, userToken} = useContext(AuthContext);

    if( isLoading ) {
        return (
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
        );
    }

  return (
    <UserProvider>
    <AudioProvider>
    <WorkoutsProvider>
    <ProgressProvider>
    <PointsProvider>
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
    </PointsProvider>
    </ProgressProvider>
    </WorkoutsProvider>
    </AudioProvider>
    </UserProvider>
  );
}

export default AppNav;