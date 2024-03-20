import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const GenderSelectorScreen = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell Us About Yourself!</Text>
      <Text style={styles.subtitle}>Please choose your gender or preferred identity. We value your uniqueness!.</Text>
      
      <View style={styles.genderContainer}>
        {/* Male option */}
        <TouchableOpacity
          style={[styles.genderCircle, selectedGender === 'male' && styles.selectedGender]}
          onPress={() => setSelectedGender('male')}
        >
          <Ionicons name="male" size={50} color={selectedGender === 'male' ? '#fff' : 'gray'} />
          <Text style={[styles.genderText, selectedGender === 'male' && styles.selectedGenderText]}>Male</Text>
        </TouchableOpacity>

        {/* Female option */}
        <TouchableOpacity
          style={[styles.genderCircle, selectedGender === 'female' && styles.selectedGender]}
          onPress={() => setSelectedGender('female')}
        >
          <Ionicons name="female" size={50} color={selectedGender === 'female' ? '#fff' : 'gray'} />
          <Text style={[styles.genderText, selectedGender === 'female' && styles.selectedGenderText]}>Female</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AgeSelector')}>
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
  genderContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 90,
  },
  genderCircle: {
    backgroundColor: '#f0f0f0',
    width: 200,
    height: 200,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'gray',
  },
  selectedGender: {
    borderColor: '#7e97ff',
    backgroundColor: '#7e97ff',
  },
  genderText: {
    marginTop: 5,
    color: 'gray',
    fontSize: 15,
    fontFamily: 'PLight',
  },
  selectedGenderText: {
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

export default GenderSelectorScreen;
