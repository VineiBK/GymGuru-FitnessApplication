import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../screens/HomeScreen';
import TrainingScreen from './TrainingScreen';
import KcalTrackerScreen from './KcalTrackerScreen';
import GymPlansScreen from './GymPlansScreen';
import SettingsScreen from './SettingsScreen';
import SettingsStackNavigator from './SettingsStackNavigator';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Settings } from 'react-native';

//import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarShowLabel:false, 
            tabBarStyle:{backgroundColor: '#7E97FF'},
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: '#E29DD9'
        }}>
        <Tab.Screen name="Home2" component={HomeScreen}  options={{
        tabBarIcon: ({color,size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
        )
       }}/>
        <Tab.Screen name="Training" component={TrainingScreen} options={{
          tabBarBadge: 1,
          tabBarBadgeStyle:{backgroundColor:'red'},
          tabBarIcon: ({color,size}) => (
            <Ionicons name="barbell-outline" color={color} size={size} />
        )
       }} />
        <Tab.Screen name="KcalTracker" component={KcalTrackerScreen} options={{
        tabBarIcon: ({color,size}) => (
            <Ionicons name="add-outline" color={color} size={size} />
        )
       }}/>
       <Tab.Screen name="GymPlans" component={GymPlansScreen}  options={{
        tabBarIcon: ({color,size}) => (
            <Ionicons name="book-outline" color={color} size={size} />
        )
       }}/>
       <Tab.Screen name="SettingsStack" component={SettingsStackNavigator}  options={{
        tabBarIcon: ({color,size}) => (
            <Ionicons name="settings-outline" color={color} size={size} />
        )
       }}/>
    </Tab.Navigator>
    );
};

export default TabNavigator;