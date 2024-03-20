import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import { useFonts } from 'expo-font';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useProgress } from '../screens/ProgressContext';

export default function StrengthScreen() {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height; // Get screen height
  const { progress } = useProgress();


  const [fontsLoaded] = useFonts
    ({
      "horizon": require("./horizon.otf"),
      "Roboto-Medium": require("./Roboto-Medium.ttf"),
      "PBlack": require("./Poppins-Black.ttf"),
      "PBold": require("./Poppins-Bold.ttf"),
      "PLight": require("./Poppins-Light.ttf")
    });
  
    if (!fontsLoaded) 
    {
      return undefined;
    }
  return ( 
  <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}> 
    {/* Background Image Wrapper with Curved Corners */}
    <View style={{
        height: screenHeight * 0.2, // 20% of screen height
        width: '100%', // Full width
        position: 'absolute',
        top: 0, // Positioned at the top
        overflow: 'hidden', // This property is necessary to make borderRadius work
        borderBottomRightRadius: 35, // Curve the bottom right corner
        borderBottomLeftRadius: 35, // Curve the bottom left corner
      }}>
        <ImageBackground 
          source={require('../screens/StrengthBG.jpg')} 
          style={{
            height: '100%', 
            width: '100%', 
          }}
        />
      </View>
  <ScrollView contentContainerStyle={{padding: 30}}>
    <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
      <Text style={styles.trainingText}>Strength Programme</Text>
      <TouchableOpacity style={styles.profilePicContainer} onPress={() => navigation.openDrawer()}>
        <ImageBackground 
          source={require('../assets/profilepicture.jpg')}
          style={styles.profilePic}
          imageStyle={{borderRadius: 25}}
        />
      </TouchableOpacity>
    </View>
    {/* Grey curved box */}
    <View style={styles.progressContainer}>
          <Text style={styles.progressText}>{`In Progress ${progress}`}</Text>
          <View style={styles.iconsContainer}>
          <Ionicons name="heart" size={24} color="red" style={styles.heartIcon} />
          <Ionicons name="share-social" size={24} color="black" style={{ marginLeft: 10 }} />
        </View>
        </View>

        {/* New text element with grey background */}
        <View style={styles.additionalTextContainer}>
        <Text style={styles.descriptionTitle}>Description:</Text>
        <Text style={styles.additionalText}>This programme's primary goal is to establish a solid strength base with a specifically selected foundational and compound exercises to help gain strength. This programme will cover a 8 week time period which covers a split of legs and upper body divided by a push/pull sessions x Arnold split.</Text>
        </View>

        <View style={{
          marginVertical: 15,
          flexDirection:'row',
          justifyContent:'space-between'
        }}>
          <Text style={{fontSize: 18, fontFamily: 'PBold' }}> Program Week Schedule</Text>
        </View>

        {/* Button for Day 1 */}
        <TouchableOpacity
          style={styles.weekButton}
          onPress={() => navigation.navigate('Day1Screen')} 
        >
          <Image source={require('../screens/IconThree.png')} style={styles.buttonImage} />
          <View style={styles.textContainer}>
            <Text style={styles.weekButtonText}>Day 1</Text>
            <Text style={styles.smallText}>Chest & Triceps</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
        {/* Button for Day 2 */}
        <TouchableOpacity
          style={styles.weekButton}
          onPress={() => navigation.navigate('Day2Screen')} 
        >
          <Image source={require('../screens/IconTwo.png')} style={styles.buttonImage} />
          <View style={styles.textContainer}>
            <Text style={styles.weekButtonText}>Day 2</Text>
            <Text style={styles.smallText}>Back & Biceps</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
       {/* Button for Day 3 */}
       <TouchableOpacity
          style={styles.weekButton}
          onPress={() => navigation.navigate('Day3Screen')} 
        >
          <Image source={require('../screens/IconFour.png')} style={styles.buttonImage} />
          <View style={styles.textContainer}>
            <Text style={styles.weekButtonText}>Day 3</Text>
            <Text style={styles.smallText}>Shoulders & Legs </Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
        {/* Button for Day 4 */}
       <TouchableOpacity
          style={styles.weekButton}
          onPress={() => navigation.navigate('Day4Screen')} 
        >
          <Image source={require('../screens/IconFive.png')} style={styles.buttonImage} />
          <View style={styles.textContainer}>
            <Text style={styles.weekButtonText}>Day 4</Text>
            <Text style={styles.smallText}>Chest & Back</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
        {/* Button for Day 5 */}
       <TouchableOpacity
          style={styles.weekButton}
          onPress={() => navigation.navigate('Day5Screen')} 
        >
          <Image source={require('../screens/IconSix.png')} style={styles.buttonImage} />
          <View style={styles.textContainer}>
            <Text style={styles.weekButtonText}>Day 5</Text>
            <Text style={styles.smallText}>Shoulders & Arms</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
        {/* Button for Day 6 */}
       <TouchableOpacity
          style={styles.weekButton}
          onPress={() => navigation.navigate('Day6Screen')} 
        >
          <Image source={require('../screens/IconSeven.png')} style={styles.buttonImage} />
          <View style={styles.textContainer}>
            <Text style={styles.weekButtonText}>Day 6</Text>
            <Text style={styles.smallText}>Legs </Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>

        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  trainingText: {
    fontSize: 20,
    fontFamily: 'PBold',
    textAlign: 'center',
    color: '#fff',
  },
  profilePicContainer: {
    position: 'absolute',
    right: 0,
    top: 6,
  },
  profilePic: {
    width: 35,
    height: 35,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 6,
  },
  progressContainer: {
    backgroundColor: '#f0f0f0', 
    borderRadius: 25, 
    padding: 15, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 100, 
    marginHorizontal: -20, 
  },
  progressText: {
    color: 'red', 
    fontFamily: 'PBold', 
    fontSize: 16, 
  },
  iconsContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  additionalTextContainer: {
    backgroundColor: '#fff', 
    marginTop: 9, 
    padding: 9, 
    borderRadius: 15, 
  },
  additionalText: {
    fontFamily: 'PLight', 
    fontSize: 13, 
    color: '#000', 
    textAlign: 'left', 
    paddingHorizontal: 5, 
  },
  descriptionTitle: {
    fontFamily: 'PBold',
    fontSize: 12, 
    color: '#000',
    textAlign: 'left',
    paddingHorizontal: 5, 
    marginBottom: -1, 
  },
  weekButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#93bbff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10, 
  },
  weekButtonText: {
    fontFamily: 'PBold',
    fontSize: 16,
    color: '#fff',
  },
  smallText: {
    fontFamily: 'PLight',
    fontSize: 12,
    color: '#fff',
  },
  buttonImage: {
    width: 80, 
    height: 60, 
  },

});