import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import { useWorkouts } from '../screens/WorkoutsContext';

const screenWidth = Dimensions.get('window').width;

//Number of workouts for each day
const workoutsData = [6, 9, 7, 4, 6, 2, 6]; // Number of workouts for each day

// Days of the week for labeling
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function TrainingScreen() {
  const { completedWorkouts } = useWorkouts();
  const maxWorkouts = Math.max(...workoutsData); 
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState("STRENGTH"); // Track active button
  const [fontsLoaded] = useFonts({
    "horizon": require("./horizon.otf"),
    "Roboto-Medium": require("./Roboto-Medium.ttf"),
    "PBlack": require("./Poppins-Black.ttf"),
    "PBold": require("./Poppins-Bold.ttf"),
    "PLight": require("./Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  // Function to handle button press
  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName); // Set the active button state

  };
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}> 
      <ScrollView contentContainerStyle={{padding: 30}}>
        <View style={styles.headerContainer}>
          <Text style={styles.trainingText}>Training</Text>
          <TouchableOpacity style={styles.profilePicContainer} onPress={() => navigation.openDrawer()}>
            <ImageBackground 
              source={require('../assets/profilepicture.jpg')}
              style={styles.profilePic}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
        {/* Programme Selection Text */}
        <Text style={styles.programSelectionText}>Current Programme Selection:</Text>
        {/* Buttons Container */}
        <View style={styles.buttonsContainer}>
          {['STRENGTH', 'WEIGHT LOSS', 'ENDURANCE'].map((buttonName) => (
            <TouchableOpacity
              key={buttonName}
              style={[
                styles.buttonStyle,
                activeButton === buttonName && styles.activeButton, //highlighted style if the button is active
              ]}
              onPress={() => handleButtonPress(buttonName)}
            >
              <Text style={styles.buttonText}>{buttonName}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
      <Text style={styles.heading}>Weekly Workout Progress:</Text>
      <View style={styles.graphContainer}>
        {workoutsData.map((workouts, index) => (
          <View key={index} style={{ alignItems: 'center', width: screenWidth / workoutsData.length }}>
            <View
              style={{
                height: `${(workouts / maxWorkouts) * 50}%`,
                width: '30%',
                backgroundColor: '#93bbff',
                borderRadius: 5,
                borderWidth: 0.5
              }}
            />
             <Text style={styles.dayLabel}>{daysOfWeek[index]}</Text>
          </View>
        ))}
      </View>
    </View>


    {/* Completed Workouts Display */}
    <Text style={styles.completedWorkoutsTitle}>Recently Completed Workouts:</Text>
        <Text style={styles.completedWorkout}>Day 1: {completedWorkouts.day1}</Text>
        <Text style={styles.completedWorkout}>Day 2: {completedWorkouts.day2}</Text>
        <Text style={styles.completedWorkout}>Day 3: {completedWorkouts.day3}</Text>
        <Text style={styles.completedWorkout}>Day 4: {completedWorkouts.day4}</Text>
        <Text style={styles.completedWorkout}>Day 5: {completedWorkouts.day5}</Text>
        <Text style={styles.completedWorkout}>Day 6: {completedWorkouts.day6}</Text>

      </ScrollView>
      <TouchableOpacity
      onPress={() => navigation.navigate('Workouts', { screen: "Strength"})} //nested
      style={styles.carryOnButton}
    >
      <Text style={styles.carryOnButtonText}>Next</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  trainingText: {
    fontSize: 20,
    fontFamily: 'PBold',
    textAlign: 'center',
  },
  profilePicContainer: {
    position: 'absolute',
    right: 0,
    top: 6,
  },
  profilePic: {
    width: 35,
    height: 35,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  buttonStyle: {
    backgroundColor: '#93bbff',
    borderRadius: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  activeButton: {
    borderColor: '#E29DD9', // Highlighted color
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'PLight',
    fontSize: 11,
  },
  programSelectionText: {
    fontFamily: 'PLight',
    fontSize: 13,
    color: '#000', 
    marginBottom: 1, //space between text and button
    textAlign: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 18,
    fontFamily: 'PLight',
    marginBottom: 15,
  },
  graphContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: '100%',
    height: 200,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  dayLabel: {
    marginTop: 5,
  },
  carryOnButton: {
    backgroundColor: '#93bbff', 
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 30, 
    borderWidth: 0.5
  },
  carryOnButtonText: {
    color: '#ffffff', 
    fontSize: 16, 
    fontFamily: 'PBold', 
  },
  completedWorkoutsTitle: {
    fontSize: 18,
    fontFamily: 'PLight',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  completedWorkout: {
    fontSize: 16,
    fontFamily: 'PLight',
    marginVertical: 5,
  },

});

