import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const AgeSelectorScreen = () => {
  const navigation = useNavigation();
  const [selectedNumber, setSelectedNumber] = useState(20); // Assuming 20 is a good starting point
  const scrollViewRef = useRef();
  const windowWidth = Dimensions.get('window').width;
  const numberContainerWidth = 60; // Adjust this value to control the width of each number

  useEffect(() => {
    // Center the scroll on the initial selected number
    scrollViewRef.current.scrollTo({
      x: (numberContainerWidth * selectedNumber) - (windowWidth / 2) + (numberContainerWidth / 2),
      animated: false,
    });
  }, [selectedNumber, numberContainerWidth]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How Old Are You?</Text>
      <Text style={styles.subtitle}>Share your age. This will help us to customise the app just for you.</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={styles.numbersContainer}
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={numberContainerWidth}
      >
        {Array.from({ length: 101 }, (_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setSelectedNumber(i)}
            style={{ width: numberContainerWidth }}
          >
            <Text style={[styles.number, selectedNumber === i && styles.selectedNumber]}>{i}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WeightSelector')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingTop: 100,
  },
  title: {
    fontFamily: 'PBold',
    fontSize: 24,
    marginBottom: 10, // Space between title and subtitle
  },
  subtitle: {
    fontFamily: 'PLight',
    fontSize: 14,
    marginBottom: 20, // Space between subtitle and number selector
    textAlign: 'center',

  },
  numbersContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  numberContainer: {
    width: Dimensions.get('window').width / 10,
  },
  number: {
    color: 'gray',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'PLight'
  },
  selectedNumber: {
    color: '#7e97ff',
    fontSize: 34, 
    fontFamily: 'PBold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', 
    position: 'absolute',
    bottom: 60, 
  },
  button: {
    backgroundColor: '#93bbff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'PBold',
    fontSize: 16,
  },
});

export default AgeSelectorScreen;