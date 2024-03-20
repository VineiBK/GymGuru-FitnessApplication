import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';

import { usePoints } from './PointsContext';

import { useAudio } from '../screens/AudioContext';

const BenchPressScreen3 = () => {
  const { isPlaying, playPauseAudio } = useAudio();
  const { addPoint } = usePoints();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Overlay Modal */}
      <Image
        source={require("../screens/gifs/BenchpressGif.gif")}
        style={styles.gifStyle}
      />
      <Text style={styles.mainText}>Bench Press</Text>
      <Text style={styles.subText}>Set 3</Text>
      <Text style={styles.subText2}>x8 REPS</Text>
    
      <Text style={styles.repsText}>Select The Number Of Reps Achieved:</Text>

      <View style={{ flexDirection: 'row', position: 'absolute', top: 40, right: 20 }}>
      <TouchableOpacity onPress={() => {}}>
      <Ionicons name="musical-notes-outline" size={30} color="black" style={{ marginRight: 10 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={playPauseAudio}>
      <Ionicons name={isPlaying ? "pause-circle-outline" : "play-circle-outline"} size={30} color="black" />
      </TouchableOpacity>
      </View>
      
      <View style={[styles.buttonRow, {marginTop: 30}]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addPoint();
            navigation.navigate('CountdownBench313');
          }}>
          <Text style={styles.buttonText}>1-3</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button}
         onPress={() => {
           addPoint();
           navigation.navigate('CountdownBench335');
         }}>
          <Text style={styles.buttonText}>3-5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addPoint();
            navigation.navigate('CountdownBench358');
          }}>
          <Text style={styles.buttonText}>5-8</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button}
         onPress={() => {
           addPoint();
           navigation.navigate('CountdownBench38');
         }}>
          <Text style={styles.buttonText}>8+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRowClose}>
        <TouchableOpacity
          style={[styles.button, styles.specialButton, {marginRight:70}]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>PREV</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.specialButton]}
          onPress={() => navigation.navigate('BenchPressScreen4')}
        >
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
  overlayImage: {
    width: '100%',
    height: '100%',
  },
  gifStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.4, 
    marginBottom: 20,
  },
  mainText: {
    fontSize: 24,
    fontFamily: 'PBold',
    marginBottom: 2,
  },
  subText: {
    fontSize: 18,
    fontFamily:'PLight',
    marginBottom: 2,
  },
  repsText: {
    fontSize: 18,
    fontFamily: 'PBold',
    marginBottom: -10, 
    marginTop: 1,
  },
  subText2: {
    fontSize: 20,
    color: '#000',
    fontFamily:'PBold',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 70,
    marginTop:5,
  },
  button: {
    backgroundColor: '#93bbff',
    padding: 8,
    borderRadius: 5,
    borderWidth:0.5
  },
  specialButton: {
    backgroundColor: '#ffa500',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily:'PBold'
  },
  buttonRowClose: {
    flexDirection: 'row',
    justifyContent: 'center', 
    width: '80%', 
    marginBottom: 25,
  },
});

export default BenchPressScreen3;
