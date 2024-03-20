import React from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function Day3Screen() {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height; // Get screen height

  const [fontsLoaded] = useFonts({
    "horizon": require("./horizon.otf"),
    "Roboto-Medium": require("./Roboto-Medium.ttf"),
    "PBlack": require("./Poppins-Black.ttf"),
    "PBold": require("./Poppins-Bold.ttf"),
    "PLight": require("./Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Background Image Wrapper with Curved Corners */}
      <View style={{
          height: screenHeight * 0.3, // 30% of screen height
          width: '100%', // Full width
          position: 'absolute',
          top: 0, // Positioned at the top
          overflow: 'hidden', // This property is necessary to make borderRadius work
          borderBottomRightRadius: 30, // Curve the bottom right corner
          borderBottomLeftRadius: 30, // Curve the bottom left corner
        }}>
        <ImageBackground 
            source={require('../screens/ShouldersBG.jpg')} 
            style={{
              height: '100%', 
              width: '100%', 
        }}
        />
      </View>

      <ScrollView contentContainerStyle={{ padding: 30 }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

      {/* Grey curved box */}
      <View style={styles.curvedBox}>
          {/* Duration Section */}
          <View style={styles.boxSection}>
            <Ionicons name="play-circle" size={24} color="black" />
            <View>
              <Text style={[styles.boxText, styles.plight]}>Duration</Text>
              <Text style={[styles.boxText, styles.pbold]}>1hr </Text>
            </View>
          </View>

          {/* Separator */}
          <View style={styles.lineSeparator} />

          {/* Burns Section */}
          <View style={styles.boxSection}>
            <Ionicons name="flame" size={24} color="black" />
            <View>
              <Text style={[styles.boxText, styles.plight]}>Burns</Text>
              <Text style={[styles.boxText, styles.pbold]}>321kcal</Text>
            </View>
          </View>
        </View>



        <View style={{ marginTop: screenHeight * 0.01}}>
          <Text style={{ fontSize: 18, fontFamily: 'PBold', marginBottom: 10 }}>  Shoulder & Legs Workout</Text>
        </View>

        <View style={styles.additionalTextContainer}>
        <Text style={styles.descriptionTitle}>Description:</Text>
        <Text style={styles.additionalText}>This workout focuses on the front , side and rear delts alongside an extra session for the legs to warm up for the main session. This workout are designed to enhance strength of the shoulders and growth of the legs..</Text>
        </View>

        <View style={{ marginTop: screenHeight * 0.01}}>
          <Text style={{ fontSize: 18, fontFamily: 'PBold', marginBottom: 10 }}>  Exercises:</Text>
        </View>

       {/*box with an image */}
        <View style={styles.dayBox}>
          <View style={styles.imageBox}>
            <Image source={require('../screens/gifs/ShoulderPressGif.gif')} style={styles.imageStyle} />
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.dayText}>Shoulder Press</Text>
          <Text style={styles.subText}> 4 Sets x 5-8 Reps </Text>
          </View>
          <Ionicons name="chevron-down" size={24} color="black" />
        </View>

        {/*box with an image */}
        <View style={styles.dayBox}>
          <View style={styles.imageBox}>
            <Image source={require('../screens/gifs/LateralGif.gif')} style={styles.imageStyle} />
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.dayText}>Lateral Raises</Text>
          <Text style={styles.subText}> 4 Sets x 12 Reps </Text>
          </View>
          <Ionicons name="chevron-down" size={24} color="black" />
        </View>

        {/*box with an image */}
        <View style={styles.dayBox}>
          <View style={styles.imageBox}>
            <Image source={require('../screens/gifs/FrontGif.gif')} style={styles.imageStyle} />
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.dayText}>Front Delt Raises</Text>
          <Text style={styles.subText}> 3 Sets x 12 Reps </Text>
          </View>
          <Ionicons name="chevron-down" size={24} color="black" />
        </View>

        {/*box with an image */}
        <View style={styles.dayBox}>
          <View style={styles.imageBox}>
            <Image source={require('../screens/gifs/RearFlyGif.gif')} style={styles.imageStyle} />
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.dayText}>Rear Delts Fly</Text>
          <Text style={styles.subText}> 3 Sets x 12 Reps </Text>
          </View>
          <Ionicons name="chevron-down" size={24} color="black" />
        </View>

        {/*box with an image */}
        <View style={styles.dayBox}>
          <View style={styles.imageBox}>
            <Image source={require('../screens/gifs/LegExtensionGif.gif')} style={styles.imageStyle} />
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.dayText}>Leg Extension </Text>
          <Text style={styles.subText}> 3 Sets x 12 Reps </Text>
          </View>
          <Ionicons name="chevron-down" size={24} color="black" />
        </View>

        {/*box with an image */}
        <View style={styles.dayBox}>
          <View style={styles.imageBox}>
            <Image source={require('../screens/gifs/LegCurlsGif.gif')} style={styles.imageStyle} />
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.dayText}>Leg Curls</Text>
          <Text style={styles.subText}> 3 Sets x 12 Reps </Text>
          </View>
          <Ionicons name="chevron-down" size={24} color="black" />
        </View>

      </ScrollView>

      {/* Static 'Start Workout' button */}
      <TouchableOpacity 
        style={styles.startWorkoutButton} 
        onPress={() => navigation.navigate('ComingSoon')}>
        <Text style={styles.startWorkoutButtonText}>Start Workout</Text>
      </TouchableOpacity>




    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 0,
    top: 6,
  },
  curvedBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    borderWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    marginTop: 200,
    marginHorizontal: 30,
  },
  boxSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineSeparator: {
    height: '60%',
    width: 1,
    backgroundColor: '#000000',
    marginHorizontal: 10,
  },
  boxText: {
    marginLeft: 6,
  },
  plight: {
    fontFamily: 'PLight',
    fontSize: 11,
  },
  pbold: {
    fontFamily: 'PBold',
    fontSize: 12,
  },
  additionalTextContainer: {
    backgroundColor: '#fff', 
    marginTop: 1, 
    padding: 2, 
    borderRadius: 15, 
  },
  additionalText: {
    fontFamily: 'PLight', 
    fontSize: 12, 
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
    marginBottom: -5,
  },
  dayBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  imageBox: {
    width: 50, 
    height: 50, 
    marginRight: 10, 
    backgroundColor: '#ddd', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  dayText: {
    fontFamily: 'PBold',
    fontSize: 15,
  },
  subText: {
    fontFamily: 'PLight',
    fontSize: 12, 
    color: '#000000', 
  },

  startWorkoutButton: {
    position: 'absolute',
    bottom: 15,
    left: 30,
    right: 30,
    backgroundColor: '#93bbff',
    padding: 9,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  startWorkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'PBold',
  },

});
