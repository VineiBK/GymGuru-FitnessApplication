import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OtherTrainerScreen = () => {
  const navigation = useNavigation();
  const [selectedTrainer, setSelectedTrainer] = useState(null); // Track the selected trainer

  // Function to render a single trainer
  const renderTrainer = (trainerId, trainerName, source) => (
    <TouchableOpacity
      key={trainerId}
      onPress={() => setSelectedTrainer(trainerId)}
      style={[
        styles.imageWrapper,
        selectedTrainer === trainerId && styles.selectedImageWrapper, // Highlight if selected
      ]}>
      <Image source={source} style={styles.image} />
      <Text style={styles.trainerName}>{trainerName}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose Another Virtual Trainer</Text>
      <View style={styles.imagesContainer}>
        {/* First row of trainers */}
        <View style={styles.imageRow}>
          {renderTrainer(1, 'Ashley', require('../ImAsh.jpg'))}
          {renderTrainer(2, 'Coming Soon', require('../Images/FemaleProfile.png'))}
          {renderTrainer(3, 'Coming Soon', require('../Images/MaleProfile.png'))}
        </View>
        {/* Second row of trainers */}
        <View style={styles.imageRow}>
          {renderTrainer(4, 'Coming Soon', require('../Images/FemaleProfile.png'))}
          {renderTrainer(5, 'Coming Soon', require('../Images/MaleProfile.png'))}
          {renderTrainer(6, 'Coming Soon', require('../Images/FemaleProfile.png'))}
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TrainerScreen')}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Satisfied?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontFamily: 'PBold',
    marginBottom: 20,
  },
  imagesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedImageWrapper: {
    borderWidth: 2,
    borderColor: '#E29DD9',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  trainerName: {
    fontSize: 14,
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
  },
});

export default OtherTrainerScreen;
