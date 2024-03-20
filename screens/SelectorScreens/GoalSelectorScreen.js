import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GoalSelectorScreen = () => {
    const navigation = useNavigation();
    const [selectedGoals, setSelectedGoals] = useState([]);
  
    // Placeholder for your goal options
    const goals = ['Lose Weight', 'Gain Muscle', 'Improve Stamina', 'Increase Weight', 'Enhance Endurance', 'Build Strength'];
  
    const handleSelectGoal = (goal) => {
      if (selectedGoals.includes(goal)) {
        // If the goal is already selected, remove it
        setSelectedGoals(selectedGoals.filter(g => g !== goal));
      } else {
        // Otherwise, add the goal to the selection
        setSelectedGoals([...selectedGoals, goal]);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What's Your Goal?</Text>
        <Text style={styles.subtitle}>Select which goal you are trying to achieve, you can select more than one option .</Text>
        
        <View style={styles.goalsContainer}>
          {goals.map((goal, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.goalOption, selectedGoals.includes(goal) && styles.selectedGoal]}
              onPress={() => handleSelectGoal(goal)}
            >
              <Text style={[styles.goalText, selectedGoals.includes(goal) && styles.selectedGoalText]}>
                {goal}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
  
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoadingScreen')}>
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
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'PLight',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  goalsContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 80,
  },
  goalOption: {
    backgroundColor: '#f0f0f0',
    padding: 10, // Reduced padding
    borderRadius: 5,
    margin: 5,
    borderWidth: 2,
    borderColor: 'gray',
  },
  selectedGoal: {
    borderColor: '#7e97ff',
    backgroundColor: '#7e97ff',
  },
  goalText: {
    color: 'gray',
    fontSize: 15,
    fontFamily: 'PLight',
    textAlign: 'center', // Center text within the button
  },
  selectedGoalText: {
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 60,
    width: '80%',
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

export default GoalSelectorScreen;
