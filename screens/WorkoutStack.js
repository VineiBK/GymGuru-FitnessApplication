import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //react navigator

import TrainingScreen from '../screens/TrainingScreen'; 
import StrengthScreen from '../screens/StrengthScreen'; 

import Day1Screen from '../screens/Day1Screen';
import Day2Screen from '../screens/Day2Screen';
import Day3Screen from '../screens/Day3Screen';
import Day4Screen from '../screens/Day4Screen';
import Day5Screen from '../screens/Day5Screen';
import Day6Screen from '../screens/Day6Screen';

import BenchPressScreen from '../screens/BenchPressScreen';

import CountdownScreenBenchSet113 from '../screens/CountdownScreenBenchSet113';
import CountdownScreenBenchSet135 from '../screens/CountdownScreenBenchSet135';
import CountdownScreenBenchSet158 from '../screens/CountdownScreenBenchSet158';
import CountdownScreenBenchSet18 from '../screens/CountdownScreenBenchSet18';

import BenchPressScreen2 from '../screens/BenchPressScreen2';

import CountdownBench213 from '../screens/CountdownBench213';
import CountdownBench235 from '../screens/CountdownBench235';
import CountdownBench258 from '../screens/CountdownBench258';
import CountdownBench28 from '../screens/CountdownBench28';

import BenchPressScreen3 from '../screens/BenchPressScreen3';

import CountdownBench313 from '../screens/CountdownBench313';
import CountdownBench335 from '../screens/CountdownBench335';
import CountdownBench358 from '../screens/CountdownBench358';
import CountdownBench38 from '../screens/CountdownBench38';

import BenchPressScreen4 from '../screens/BenchPressScreen4';

import CountdownBench413 from '../screens/CountdownBench413';
import CountdownBench435 from '../screens/CountdownBench435';
import CountdownBench458 from '../screens/CountdownBench458';
import CountdownBench48 from '../screens/CountdownBench48';

import DBInclineScreen from '../screens/DBInclineScreen';

import CountdownDBIncline113 from '../screens/CountdownDBIncline113';
import CountdownDBIncline135 from '../screens/CountdownDBIncline135';
import CountdownDBIncline158 from '../screens/CountdownDBIncline158';
import CountdownDBIncline18 from '../screens/CountdownDBIncline18';

import DBInclineScreen2 from '../screens/DBInclineScreen2';

import CountdownDBIncline213 from '../screens/CountdownDBIncline213';
import CountdownDBIncline235 from '../screens/CountdownDBIncline235';
import CountdownDBIncline258 from '../screens/CountdownDBIncline258';
import CountdownDBIncline28 from '../screens/CountdownDBIncline28';

import DBInclineScreen3 from '../screens/DBInclineScreen3';

import CountdownDBIncline313 from '../screens/CountdownDBIncline313';
import CountdownDBIncline335 from '../screens/CountdownDBIncline335';
import CountdownDBIncline358 from '../screens/CountdownDBIncline358';
import CountdownDBIncline38 from '../screens/CountdownDBIncline38';

import PecFlyScreen from '../screens/PecFlyScreen';

import CountdownPec114 from '../screens/CountdownPec114';
import CountdownPec148 from '../screens/CountdownPec148';
import CountdownPec1812 from '../screens/CountdownPec1812';
import CountdownPec112 from '../screens/CountdownPec112';

import PecFlyScreen2 from '../screens/PecFlyScreen2';

import CountdownPec214 from '../screens/CountdownPec214';
import CountdownPec248 from '../screens/CountdownPec248';
import CountdownPec2812 from '../screens/CountdownPec2812';
import CountdownPec212 from '../screens/CountdownPec212';

import PecFlyScreen3 from '../screens/PecFlyScreen3';

import CountdownPec314 from '../screens/CountdownPec314';
import CountdownPec348 from '../screens/CountdownPec348';
import CountdownPec3812 from '../screens/CountdownPec3812';
import CountdownPec312 from '../screens/CountdownPec312';

import DipScreen from '../screens/DipScreen';

import CountdownDip114 from '../screens/CountdownDip114';
import CountdownDip148 from '../screens/CountdownDip148';
import CountdownDip1812 from '../screens/CountdownDip1812';
import CountdownDip112 from '../screens/CountdownDip112';

import DipScreen2 from '../screens/DipScreen2';

import CountdownDip214 from '../screens/CountdownDip214';
import CountdownDip248 from '../screens/CountdownDip248';
import CountdownDip2812 from '../screens/CountdownDip2812';
import CountdownDip212 from '../screens/CountdownDip212';

import DipScreen3 from '../screens/DipScreen3';

import CountdownDip314 from '../screens/CountdownDip314';
import CountdownDip348 from '../screens/CountdownDip348';
import CountdownDip3812 from '../screens/CountdownDip3812';
import CountdownDip312 from '../screens/CountdownDip312';

import TricepPushdownScreen from '../screens/TricepPushdownScreen';

import CountdownTricepPushdown113 from '../screens/CountdownTricepPushdown113'
import CountdownTricepPushdown135 from '../screens/CountdownTricepPushdown135'
import CountdownTricepPushdown158 from '../screens/CountdownTricepPushdown158'
import CountdownTricepPushdown1812 from '../screens/CountdownTricepPushdown1812'

import TricepPushdownScreen2 from '../screens/TricepPushdownScreen2';

import CountdownTricepPushdown213 from '../screens/CountdownTricepPushdown213'
import CountdownTricepPushdown235 from '../screens/CountdownTricepPushdown235'
import CountdownTricepPushdown258 from '../screens/CountdownTricepPushdown258'
import CountdownTricepPushdown2812 from '../screens/CountdownTricepPushdown2812'

import TricepPushdownScreen3 from '../screens/TricepPushdownScreen3';

import CountdownTricepPushdown313 from '../screens/CountdownTricepPushdown313'
import CountdownTricepPushdown335 from '../screens/CountdownTricepPushdown335'
import CountdownTricepPushdown358 from '../screens/CountdownTricepPushdown358'
import CountdownTricepPushdown3812 from '../screens/CountdownTricepPushdown3812'

import OverheadExtensionScreen from '../screens/OverheadExtensionScreen';

import CountdownOverhead114 from '../screens/CountdownOverhead114';
import CountdownOverhead148 from '../screens/CountdownOverhead148';
import CountdownOverhead1812 from '../screens/CountdownOverhead1812';
import CountdownOverhead112 from '../screens/CountdownOverhead112';

import OverheadExtensionScreen2 from '../screens/OverheadExtensionScreen2';

import CountdownOverhead214 from '../screens/CountdownOverhead214';
import CountdownOverhead248 from '../screens/CountdownOverhead248';
import CountdownOverhead2812 from '../screens/CountdownOverhead2812';
import CountdownOverhead212 from '../screens/CountdownOverhead212';

import OverheadExtensionScreen3 from '../screens/OverheadExtensionScreen3';

import CompletedDay1WorkoutScreen from '../screens/CompletedDay1WorkoutScreen';
import ComingSoon from './ComingSoon';


const Stack = createNativeStackNavigator(); //creating the stack

const WorkoutStack = () => {
  return (
    <Stack.Navigator initialRouteName="Training"> 
        <Stack.Screen component={TrainingScreen} name="Training" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={StrengthScreen} name="Strength" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={ComingSoon} name="ComingSoon" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={Day1Screen} name="Day1Screen" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={Day2Screen} name="Day2Screen" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={Day3Screen} name="Day3Screen" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={Day4Screen} name="Day4Screen" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={Day5Screen} name="Day5Screen" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={Day6Screen} name="Day6Screen" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={BenchPressScreen} name="BenchPressScreen" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={CountdownScreenBenchSet113} name="CountdownScreenBenchSet113" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={CountdownScreenBenchSet135} name="CountdownScreenBenchSet135" options={{ headerShown: false 
        }}/>
         <Stack.Screen component={CountdownScreenBenchSet158} name="CountdownScreenBenchSet158" options={{ headerShown: false 
        }}/>
         <Stack.Screen component={CountdownScreenBenchSet18} name="CountdownScreenBenchSet18" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={BenchPressScreen2} name="BenchPressScreen2" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={CountdownBench213} name="CountdownBench213" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownBench235} name="CountdownBench235" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownBench258} name="CountdownBench258" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownBench28} name="CountdownBench28" options={{ headerShown: false
        }}/>
        <Stack.Screen component={BenchPressScreen3} name="BenchPressScreen3" options={{ headerShown: false 
        }}/>
        <Stack.Screen component={CountdownBench313} name="CountdownBench313" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownBench335} name="CountdownBench335" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownBench358} name="CountdownBench358" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownBench38} name="CountdownBench38" options={{ headerShown: false
        }}/>
        <Stack.Screen component={BenchPressScreen4} name="BenchPressScreen4" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownBench413} name="CountdownBench413" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownBench435} name="CountdownBench435" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownBench458} name="CountdownBench458" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownBench48} name="CountdownBench48" options={{ headerShown: false
        }}/>
        <Stack.Screen component={DBInclineScreen} name="DBInclineScreen" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDBIncline113} name="CountdownDBIncline113" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDBIncline135} name="CountdownDBIncline135" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDBIncline158} name="CountdownDBIncline158" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDBIncline18} name="CountdownDBIncline18" options={{ headerShown: false
        }}/>
        <Stack.Screen component={DBInclineScreen2} name="DBInclineScreen2" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDBIncline213} name="CountdownDBIncline213" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDBIncline235} name="CountdownDBIncline235" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDBIncline258} name="CountdownDBIncline258" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDBIncline28} name="CountdownDBIncline28" options={{ headerShown: false
        }}/>
        <Stack.Screen component={DBInclineScreen3} name="DBInclineScreen3" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDBIncline313} name="CountdownDBIncline313" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDBIncline335} name="CountdownDBIncline335" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDBIncline358} name="CountdownDBIncline358" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDBIncline38} name="CountdownDBIncline38" options={{ headerShown: false
        }}/>
        <Stack.Screen component={PecFlyScreen} name="PecFlyScreen" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownPec114} name="CountdownPec114" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownPec148} name="CountdownPec148" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownPec1812} name="CountdownPec1812" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownPec112} name="CountdownPec112" options={{ headerShown: false
        }}/>
        <Stack.Screen component={PecFlyScreen2} name="PecFlyScreen2" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownPec214} name="CountdownPec214" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownPec248} name="CountdownPec248" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownPec2812} name="CountdownPec2812" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownPec212} name="CountdownPec212" options={{ headerShown: false
        }}/>
        <Stack.Screen component={PecFlyScreen3} name="PecFlyScreen3" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownPec314} name="CountdownPec314" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownPec348} name="CountdownPec348" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownPec3812} name="CountdownPec3812" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownPec312} name="CountdownPec312" options={{ headerShown: false
        }}/>
        <Stack.Screen component={DipScreen} name="DipScreen" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDip114} name="CountdownDip114" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDip148} name="CountdownDip148" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDip1812} name="CountdownDip1812" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDip112} name="CountdownDip112" options={{ headerShown: false
        }}/>
        <Stack.Screen component={DipScreen2} name="DipScreen2" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDip214} name="CountdownDip214" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDip248} name="CountdownDip248" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDip2812} name="CountdownDip2812" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDip212} name="CountdownDip212" options={{ headerShown: false
        }}/>
        <Stack.Screen component={DipScreen3} name="DipScreen3" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDip314} name="CountdownDip314" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDip348} name="CountdownDip348" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDip3812} name="CountdownDip3812" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownDip312} name="CountdownDip312" options={{ headerShown: false
        }}/>
        <Stack.Screen component={TricepPushdownScreen} name="TricepPushdownScreen" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownTricepPushdown113} name="CountdownTricepPushdown113" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownTricepPushdown135} name="CountdownTricepPushdown135" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownTricepPushdown158} name="CountdownTricepPushdown158" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownTricepPushdown1812} name="CountdownTricepPushdown1812" options={{ headerShown: false
        }}/>
        <Stack.Screen component={TricepPushdownScreen2} name="TricepPushdownScreen2" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownTricepPushdown213} name="CountdownTricepPushdown213" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownTricepPushdown235} name="CountdownTricepPushdown235" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownTricepPushdown258} name="CountdownTricepPushdown258" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownTricepPushdown2812} name="CountdownTricepPushdown2812" options={{ headerShown: false
        }}/>
        <Stack.Screen component={TricepPushdownScreen3} name="TricepPushdownScreen3" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownTricepPushdown313} name="CountdownTricepPushdown313" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownTricepPushdown335} name="CountdownTricepPushdown335" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownTricepPushdown358} name="CountdownTricepPushdown358" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownTricepPushdown3812} name="CountdownTricepPushdown3812" options={{ headerShown: false
        }}/>
        <Stack.Screen component={OverheadExtensionScreen} name="OverheadExtensionScreen" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownOverhead114} name="CountdownOverhead114" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownOverhead148} name="CountdownOverhead148" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownOverhead1812} name="CountdownOverhead1812" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownOverhead112} name="CountdownOverhead112" options={{ headerShown: false
        }}/>
        <Stack.Screen component={OverheadExtensionScreen2} name="OverheadExtensionScreen2" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownOverhead214} name="CountdownOverhead214" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownOverhead248} name="CountdownOverhead248" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownOverhead2812} name="CountdownOverhead2812" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CountdownOverhead212} name="CountdownOverhead212" options={{ headerShown: false
        }}/>
        <Stack.Screen component={OverheadExtensionScreen3} name="OverheadExtensionScreen3" options={{ headerShown: false
        }}/>
        <Stack.Screen component={CompletedDay1WorkoutScreen} name="CompletedDay1WorkoutScreen" options={{ headerShown: false
        }}/>
      </Stack.Navigator>
  );
};

export default WorkoutStack;