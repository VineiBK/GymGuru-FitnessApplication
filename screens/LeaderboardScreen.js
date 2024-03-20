import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { usePoints } from '../screens/PointsContext';
import { useNavigation } from '@react-navigation/native';

const LeaderboardScreen = () => {
  const navigation = useNavigation();
  const { points } = usePoints(); // Use PointsContext to get the current user's points
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const otherUsers = [
      { name: "Josh", points: Math.floor(Math.random() * 11), image: require('../screens/Images/MaleProfile.png') },
      { name: "Khushi", points: Math.floor(Math.random() * 11), image: require('../screens/Images/FemaleProfile.png') },
      { name: "Jenny ", points: Math.floor(Math.random() * 11), image: require('../screens/Images/FemaleProfile.png') },
      { name: "Harry", points: Math.floor(Math.random() * 11), image: require('../screens/Images/MaleProfile.png') },
      { name: "Ali", points: Math.floor(Math.random() * 11), image: require('../screens/Images/MaleProfile.png') },
      { name: "Simon", points: Math.floor(Math.random() * 11), image: require('../screens/Images/MaleProfile.png') },
      { name: "Lily", points: Math.floor(Math.random() * 11), image: require('../screens/Images/FemaleProfile.png') },
      // current profile
      { name: "You", points: points, image: require('../assets/profilepicture.jpg') },
    ];
    // Sort by points descending
    const sortedUsers = otherUsers.sort((a, b) => b.points - a.points);
    setLeaderboardData(sortedUsers);
  }, [points]);

  // Function to convert rank number to ordinal
  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}> 
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <Text style={styles.subtitle}>Current Positions</Text>
      <View style={styles.leaderboardContainer}>
      <ScrollView style={styles.leaderboardList}>
  {leaderboardData.map((user, index) => (
    <View key={index} style={styles.userRow}>
      {/* Position Text */}
      <Text style={[
        styles.position,
        index === 0 ? { color: 'gold' } :
        index === 1 ? { color: 'silver' } :
        index === 2 ? { color: '#cd7f32' } :
        {} // Default style
      ]}>
        {getOrdinal(index + 1)}
      </Text>
      {/* User Profile Picture */}
      <Image source={user.image} style={styles.profilePic} />
      {/* User Name Text */}
      <Text style={[
        styles.userName,
        index === 0 ? { color: 'gold', fontFamily: 'PBold' } :
        index === 1 ? { color: 'silver', fontFamily: 'PBold' } :
        index === 2 ? { color: '#cd7f32', fontFamily: 'PBold' } : 
        { color: 'black', fontFamily: 'PLight' } 
      ]}>
        {user.name}
      </Text>
      {/* Points Text */}
      <Text style={styles.points}>{user.points} pts</Text>
    </View>
  ))}
</ScrollView>
        <TouchableOpacity style={styles.profilePicContainer} onPress={() => navigation.openDrawer()}>
        <ImageBackground 
          source={require('../assets/profilepicture.jpg')}
          style={styles.profilePic}
          imageStyle={{borderRadius: 25}}
        />
      </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  profilePicContainer: {
    position: 'absolute',
    right: 0,
    top: -80,
  },
  profilePic: {
    width: 35,
    height: 35,
  },
  title: {
    fontSize: 24,
    fontFamily: 'PBold',
  },
  subtitle: {
    fontSize: 18,
    color: 'grey',
    marginVertical: 10,
    fontFamily: 'PLight',
  },
  leaderboardContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f0f0', 
    borderRadius: 20,
    padding: 10, 
    marginTop: 20,
    maxHeight: 700, 
  },
  leaderboardList: {
    width: '100%',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 45,
  },
  position: {
    width: 40,
    fontSize: 16,
    fontFamily: 'PBold',
    marginRight: 10, 
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'PLight',
  },
  points: {
    fontSize: 16,
    fontFamily: 'PBold',
  },
});

export default LeaderboardScreen;
