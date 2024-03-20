import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  Dimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GivenAshImage = require("../screenimages/Vinei/GivenAshOverlay.png");
const ImAshImage = require("../screenimages/Vinei/ImAshOverlay.png");
const HoldUpImage = require("../screenimages/Vinei/HoldUpOverlay.png");
const ReadUpImage = require("../screenimages/Vinei/ReadUpOverlay.png");
const GoodLuckImage = require("../screenimages/Vinei/GoodLuckOverlay.png");


const TrainerScreen = () => {
  const navigation = useNavigation();
  const [firstOverlayVisible, setFirstOverlayVisible] = useState(true);
  const [secondOverlayVisible, setSecondOverlayVisible] = useState(false);
  const [ThirdOverlayVisible, setThirdOverlayVisible] = useState(false);
  const [FourthOverlayVisible, setFourthOverlayVisible] = useState(false);
  const [FifthOverlayVisible, setFifthOverlayVisible] = useState(false);
  

  const handleFirstOverlayTap = () => {
    setFirstOverlayVisible(false);
    setSecondOverlayVisible(true);
  };
  const handleSecondOverlayTap = () => {
    setSecondOverlayVisible(false);
    setThirdOverlayVisible(true);
  };
  const handleThirdOverlayTap = () => {
    setThirdOverlayVisible(false);
    setFourthOverlayVisible(true);
  };

  const handleFourthOverlayTap = () => {
    setFourthOverlayVisible(false);
    setFifthOverlayVisible(true);
  };
  const handleFifthOverlayTap = () => {
    setFifthOverlayVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

      <Modal
        visible={firstOverlayVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setFirstOverlayVisible(false)}>
        <TouchableOpacity style={styles.overlay} onPress={handleFirstOverlayTap}>
          <Image source={GivenAshImage} style={styles.overlayImage} />
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={secondOverlayVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSecondOverlayVisible(false)}>
        <TouchableOpacity style={styles.overlay} onPress={handleSecondOverlayTap}>
          <Image source={ImAshImage} style={styles.overlayImage} />
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={ThirdOverlayVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setThirdOverlayVisible(false)}>
        <TouchableOpacity style={styles.overlay} onPress={handleThirdOverlayTap}>
          <Image source={HoldUpImage} style={styles.overlayImage} />
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={FourthOverlayVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setFourthOverlayVisible(false)}>
        <TouchableOpacity style={styles.overlay} onPress={handleFourthOverlayTap}>
          <Image source={ReadUpImage} style={styles.overlayImage} />
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={FifthOverlayVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setFifthOverlayVisible(false)}>
        <TouchableOpacity style={styles.overlay} onPress={handleFifthOverlayTap}>
          <Image source={GoodLuckImage} style={styles.overlayImage} />
        </TouchableOpacity>
      </Modal>

        <ImageBackground
          source={require('../ImAsh.jpg')}
          style={styles.imageBackground}
        />
      </View>
      <Text style={styles.title}>Here is your Virtual Trainer:           Ashley Fernandes</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Experience</Text>
          <Text style={styles.infoText}>10yrs</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Followers</Text>
          <Text style={styles.infoText}>2k</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Courses</Text>
          <Text style={styles.infoText}>1</Text>
        </View>
      </View>
      <Text style={styles.longText}>
        Hi there, my name is Ashley Fernandes and I am 24 years old. I have been a personal trainer for a couple of years now but have been in the fitness industry for 10+ years and have trained clients all over the world, starting from Goa, India, my hometown.
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OtherTrainerScreen')}>
          <Text style={styles.buttonText}>Check Out Other Trainers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.nextButton]}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '40%',
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 22,
    fontFamily: 'PBold',
    marginTop: 20,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 16,
    fontFamily: 'PBold',
  },
  infoText: {
    fontSize: 14,
    fontFamily: 'PLight',
  },
  longText: {
    marginHorizontal: 20,
    fontSize: 12,
    fontFamily: 'PLight',
    textAlign: 'center',
    marginVertical: 50,
  },
  buttonsContainer: {
    marginTop: 20,
    width: '80%',
  },
  button: {
    backgroundColor: '#93bbff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%', 
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'PBold',
  },
  nextButton: {
    marginTop: 10,
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

export default TrainerScreen;
