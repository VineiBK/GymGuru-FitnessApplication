import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image, Modal } from 'react-native';

import { usePoints } from '../screens/PointsContext'; 
import { useProgress } from '../screens/ProgressContext';
import { useWorkouts } from '../screens/WorkoutsContext';

const CompletedDay1WorkoutScreen = ({ navigation }) => {
    const { points } = usePoints();
    const { updateProgress } = useProgress();
    const { completeWorkout } = useWorkouts();

    const [showOverlayOne, setShowOverlayOne] = useState(true);
    const [showOverlayTwo, setShowOverlayTwo] = useState(false);

    const handleOverlayOnePress = () => {
        setShowOverlayOne(false);
        setShowOverlayTwo(true);
    };

    const handleOverlayTwoPress = () => {
        setShowOverlayTwo(false);
    };

  return (
    <View style={styles.container}>
        {/* Overlay One */}
        <Modal
                visible={showOverlayOne}
                transparent={true}
                animationType="fade"
                onRequestClose={handleOverlayOnePress}>
                <TouchableOpacity style={styles.overlay} onPress={handleOverlayOnePress}>
                    <Image source={require("../screens/screenimages/CompletedWorkoutHappyAsh.png")} style={styles.overlayImage} />
                </TouchableOpacity>
            </Modal>

            {/* Overlay Two */}
            <Modal
                visible={showOverlayTwo}
                transparent={true}
                animationType="fade"
                onRequestClose={handleOverlayTwoPress}>
                <TouchableOpacity style={styles.overlay} onPress={handleOverlayTwoPress}>
                    <Image source={require("../screens/screenimages/PointsGainedAsh.png")} style={styles.overlayImage} />
                </TouchableOpacity>
            </Modal>
      <Text style={styles.title}>Well Done!</Text>
      <Text style={styles.subtitle}>You Have Completed The Workout.</Text>
      <Text style={styles.points}>Total Points Earned This Workout: {points}</Text>
      
      {/* Button to navigate away or reset workout/session */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
            completeWorkout('day1');
            updateProgress("16.17%");
            navigation.navigate('Strength');
        }}
      >
        <Text style={styles.buttonText}>Go Back To Strength Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'PBold',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'PBold',
    textAlign: 'center',
    marginBottom: 20,
  },
  points: {
    fontSize: 16,
    fontFamily: 'PLight',
    color: '#D092EA', 
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#7E97FF', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'PBold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  overlayImage: {
    width: '100%',
    height: '100%',
  },
});

export default CompletedDay1WorkoutScreen;
