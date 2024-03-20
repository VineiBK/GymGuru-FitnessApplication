import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('TrainerScreen'); // Replace 'NextScreenName' with the actual screen you want to navigate to
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../newdesignforlogo.png')} style={styles.imageTop} />
      <Text style={styles.text}>Assigning You To Your Virtual Trainer and creating your custom gym workout plan.</Text>
      <Image source={require('../LoadingGif.webp')} style={styles.imageBottom} />
      <Text style={styles.pleaseWaitText}>Please Wait</Text>
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
  imageTop: {
    width: 400, 
    height: 150, 
    marginBottom: 60,
  },
  text: {
    fontSize: 18,
    fontFamily: 'PLight', 
    marginBottom: 200, // Adjust the spacing as needed
  },
  loadingText: {
    fontSize: 18,
    fontFamily: 'PLight', 
    marginBottom: 200,
  },
  imageBottom: {
    width: 50, 
    height: 50, 
    marginBottom: 20, // Adjusted for further spacing
  },
  pleaseWaitText: {
    fontSize: 15,
    fontFamily: 'PLight', 
  },
});

export default LoadingScreen;
