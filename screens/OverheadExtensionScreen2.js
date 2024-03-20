import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';

import { usePoints } from './PointsContext';
import { useAudio } from '../screens/AudioContext';

const OverheadExtensionScreen2 = () => {
  const { isPlaying, playPauseAudio } = useAudio();
  const { addPoint } = usePoints(); //Point System
  const navigation = useNavigation();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
  //setting a delay fade affect for image overlay to appear
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 1000); // 1000 milliseconds = 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../screens/gifs/OverheadRopeExtension.gif")}
        style={styles.gifStyle}
      />
      <Text style={styles.mainText}>Overhead Tricep Extension</Text>
      <Text style={styles.subText}>Set 2</Text>
      <Text style={styles.subText2}>x12 REPS</Text>
    
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
            navigation.navigate('CountdownOverhead214');
          }}>
          <Text style={styles.buttonText}>1-4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addPoint();
            navigation.navigate('CountdownOverhead248');
          }}>
          <Text style={styles.buttonText}>4-8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addPoint();
            navigation.navigate('CountdownOverhead2812');
          }}>
          <Text style={styles.buttonText}>8-12</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addPoint();
            navigation.navigate('CountdownOverhead212');
          }}>
          <Text style={styles.buttonText}>12+</Text>
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
          onPress={() => navigation.navigate('OverheadExtensionScreen3')}
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

export default OverheadExtensionScreen2;
