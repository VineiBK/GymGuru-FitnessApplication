import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ComingSoon = () => {
  const navigation = useNavigation();
  const [countdown, setCountdown] = useState(3); // Start countdown from 3 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(timer);
          navigation.goBack(); // Navigate back when countdown reaches 0
        }
        return prevCountdown - 1;
      });
    }, 1000); // Decrease countdown every second

    return () => clearInterval(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textComingSoon}>Coming Soon</Text>
      <Text style={styles.textGoingBackIn}>Going Back In</Text>
      <Text style={styles.textCountdown}>{countdown}</Text>
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
  textComingSoon: {
    fontSize: 24,
    fontFamily: 'PBold',
    marginBottom: 10, 
  },
  textGoingBackIn: {
    fontSize: 18,
    fontFamily: 'PLight',
    marginBottom: 5, 
  },
  textCountdown: {
    fontSize: 22,
    fontFamily: 'PBold',
  },
});

export default ComingSoon;
