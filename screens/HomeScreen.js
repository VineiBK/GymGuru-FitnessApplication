import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

//For the Carousels
import Carousel from 'react-native-snap-carousel';
import { sliderData} from '../screens/data';
import { sliderData2} from '../screens/Seconddata';
import { windowWidth } from './Dimensions';
import { useFonts } from 'expo-font';
import BannerSlider from './BannerSlider';
import SecondBannerSlider from './SecondBannerSlider';

import { useUser } from '../screens/UserContext';

//Progress Bar
import { AnimatedCircularProgress } from 'react-native-circular-progress';

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  const { userName } = useUser();
  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />
  }
  const SecondrenderBanner = ({item, index}) => {
    return <SecondBannerSlider data={item} />
  }
  const navigation = useNavigation();
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
  return ( //the padding ; higher the number the more distance from the top.
    <SafeAreaView style={{flex: 1,backgroundColor:'#fff'}}> 
      <ScrollView style={{padding:30}}> 
        <View 
          style={{ 
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems: 'center',
            marginBottom: 10, //brings the search box closer to the top padding text and profile picture
         }}>
        <View>
        <Text style={{ fontSize: 11, color: 'gray', fontFamily: 'PBold' }}>Welcome Back,</Text>
        <Text style={{ fontSize: 16, fontFamily: 'PBold' }}> { userName } </Text> 
        </View>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <ImageBackground 
          source={require('../assets/profilepicture.jpg')}
          style={{width:35,height:35}}
          imageStyle={{borderRadius:25}}
        />
        </TouchableOpacity>
        </View>
        <View 
          style={{ //this is the search box outline
            flexDirection:'row', 
            borderColor:'#C6C6C6', 
            borderWidth: 1, 
            BorderRadius: 8, 
            paddingHorizontal:10, 
            paddingVertical: 8,
            borderRadius: 10,
          }}>
          <Feather //this is the search icon
            name="search"
            size={25}
            color="#C6C6C6"
            style={{marginRight:5,}}
          /> 
          <TextInput placeholder="Search" /> 
        </View>

        <View style={{
          marginVertical: 15,
          flexDirection:'row',
          justifyContent:'space-between'
        }}>
          <Text style={{fontSize: 18, fontFamily: 'PBold' }}> Upcoming Programs</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('GymPlans')}>
            <Text style={{color:'#0aada8'}}>See All</Text>
          </TouchableOpacity>
        </View>
        <Carousel 
          ref={(c) => { this._carousel = c; }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        <View style={{
          marginVertical: 15,
          flexDirection:'row',
          justifyContent:'space-between'
        }}>
          <Text style={{fontSize: 18, fontFamily: 'PBold' }}> Workouts</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('GymPlans')}>
            <Text style={{color:'#0aada8'}}>See All</Text>
          </TouchableOpacity>
        </View>
        <Carousel 
          ref={(c) => { this._carousel = c; }}
          data={sliderData2}
          renderItem={SecondrenderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={200}
          loop={true}
        />

      <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around', // This will space out your progress bars evenly
      alignItems: 'center',
      marginVertical: 50,
    }}>
      {/* First progress bar and text */}
      <View style={{alignItems: 'center'}}>
        <AnimatedCircularProgress
          size={100}
          width={10}
          fill={75} 
          tintColor="#93bbff"
          backgroundColor="#3d5875">
          {
            () => <Ionicons name="flame" size={48} color="#93bbff" />
          }
        </AnimatedCircularProgress>
        <Text style={{marginTop: 8, color: 'gray', fontFamily: 'PLight', fontSize: 12}}>
          Kcal Burnt
        </Text>
        <Text style={{color: 'black', fontFamily: 'PBold', fontSize: 16}}>
          500
        </Text>
      </View>

      {/* Second progress bar and text */}
      <View style={{alignItems: 'center'}}>
        <AnimatedCircularProgress
          size={100}
          width={10}
          fill={50} 
          tintColor="#93bbff"
          backgroundColor="#3d5875">
          {
            () => <Ionicons name="water" size={48} color="#93bbff" />
          }
        </AnimatedCircularProgress>
        <Text style={{marginTop: 8, color: 'gray', fontFamily: 'PLight', fontSize: 12}}>
          Water Intake
        </Text>
        <Text style={{color: 'black', fontFamily: 'PBold', fontSize: 16}}>
          2L
        </Text>
      </View>

      {/* Third progress bar and text */}
      <View style={{alignItems: 'center'}}>
        <AnimatedCircularProgress
          size={100}
          width={10}
          fill={25} 
          tintColor="#93bbff"
          backgroundColor="#3d5875">
          {
            () => <Ionicons name="walk" size={48} color="#93bbff" />
          }
        </AnimatedCircularProgress>
        <Text style={{marginTop: 8, color: 'gray', fontFamily: 'PLight', fontSize: 12}}>
          Steps
        </Text>
        <Text style={{color: 'black', fontFamily: 'PBold', fontSize: 16}}>
          3000
        </Text>
      </View>
    </View>

      </ScrollView>
    </SafeAreaView>
  )
}
