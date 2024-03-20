import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeightSelectorScreen = () => {
  const navigation = useNavigation();
  const [selectedFeet, setSelectedFeet] = useState(5); // Default to 5 feet
  const [selectedInches, setSelectedInches] = useState(6); // Default to 6 inches
  const feetRange = Array.from({ length: 5 }, (_, i) => 3 + i); // Range from 3 to 7 feet
  const inchesRange = Array.from({ length: 12 }, (_, i) => i); // Range from 0 to 11 inches

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How Tall Are You?</Text>
      <Text style={styles.subtitle}>Don't worry, you can always change it later , your height will determine which programme is best for you.</Text>
      <View style={styles.selectorContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.selector}
          snapToAlignment="center"
          snapToInterval={Dimensions.get('window').width / 5} // Adjust the snap interval as needed
        >
          {feetRange.map((feet) => (
            <TouchableOpacity
              key={feet}
              style={styles.option}
              onPress={() => setSelectedFeet(feet)}
            >
              <Text style={[styles.optionText, selectedFeet === feet && styles.selectedOptionText]}>
                {feet}ft
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.selector}
          snapToAlignment="center"
          snapToInterval={Dimensions.get('window').width / 12} // Adjust the snap interval as needed
        >
          {inchesRange.map((inches) => (
            <TouchableOpacity
              key={inches}
              style={styles.option}
              onPress={() => setSelectedInches(inches)}
            >
              <Text style={[styles.optionText, selectedInches === inches && styles.selectedOptionText]}>
                {inches}in
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Text style={styles.selectedHeightText}>
        Selected Height: {selectedFeet}Feet {selectedInches}Inch
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GoalSelector')}>
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
  selectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
  },
  subtitle: {
    fontFamily: 'PLight',
    fontSize: 14,
    marginBottom: 300, // Space between subtitle and number selector
    textAlign: 'center',
  },
  selector: {
    paddingHorizontal: 50, // Give some horizontal padding
  },
  option: {
    marginHorizontal: 10, // Space between options
  },
  optionText: {
    fontSize: 18,
    fontFamily: 'PLight',
    color: 'gray',
  },
  selectedOptionText: {
    fontSize: 22,
    color: '#7e97ff',
    fontFamily: 'PBold',
  },
  selectedHeightText: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: 'PLight',
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

export default HeightSelectorScreen;
