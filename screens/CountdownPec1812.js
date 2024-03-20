import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CountdownPec1812 = () => {
  const navigation = useNavigation();
  const [firstOverlayVisible, setFirstOverlayVisible] = useState(true);
  const [secondOverlayVisible, setSecondOverlayVisible] = useState(false);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [seconds, setSeconds] = useState(180); // 180 seconds for 3 minutes

  useEffect(() => {
    let interval = null;
    if (countdownStarted && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      navigation.navigate('PecFlyScreen2'); // Navigate when countdown finishes
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [countdownStarted, seconds, navigation]);

  const handleFirstOverlayTap = () => {
    setFirstOverlayVisible(false);
    setSecondOverlayVisible(true);
  };

  const handleSecondOverlayTap = () => {
    setSecondOverlayVisible(false);
    setCountdownStarted(true);
  };

  return (
    <View style={styles.container}>
      {firstOverlayVisible && (
        <TouchableOpacity style={styles.overlay} onPress={handleFirstOverlayTap}>
          <Image source={require("../screens/screenimages/WellDoneAsh.png")} style={styles.overlayImage} />
        </TouchableOpacity>
      )}

      {secondOverlayVisible && (
        <TouchableOpacity style={styles.overlay} onPress={handleSecondOverlayTap}>
          <Image source={require("../screens/screenimages/RestAsh.png")} style={styles.overlayImage} />
        </TouchableOpacity>
      )}

      {countdownStarted && (
        <>
          <Text style={styles.countdownText}>{`Time Remaining: ${seconds} seconds`}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>PREV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PecFlyScreen2')}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  countdownText: {
    fontSize: 24,
    fontFamily: 'PBold',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    backgroundColor: '#ffa500',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'PBold',
  },

});

export default CountdownPec1812;
