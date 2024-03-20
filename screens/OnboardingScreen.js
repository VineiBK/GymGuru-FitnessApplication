import React from 'react';
import 
{
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
//#7864FD
import {Image} from 'react-native';
const logoImg = require("./newdesignforlogo.png"); //this is the middle image icon //#685fff
//const imagegymguru = require("./mainlogodesign.png"); //this is the logo //#26227b

//for the icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

//for the fonts
import { useFonts } from 'expo-font';

const OnboardingScreen = ({navigation}) => {
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
      // <ImageBackground //added for background
      // source={backgroundImg}
      // style={{flex:1, justifyContent: 'center', alignItems:'center'}} >
      <SafeAreaView 
        style={{
          flex: 1,
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: '#fff',
        }}>
        {/* <View style={{marginTop:50}}> 
          <Text style={{fontSize:40,color:'#26227b', fontFamily:"horizon"}}> 
            GYM GURU 
          </Text> 
        </View> */}
        {/* <View style={{flex:1, justifyContent: 'flex-start', alignItems: 'center'}}>
         <Image source={imagegymguru} //middle logo
         style={{
          width:500, 
          height:300
          }} /> 
        </View>  */}
         <View style={{flex:1, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
         <Image source={logoImg} //middle main logo
         style={{width:400, height: 400 }} />
         <Text style={{fontSize: 20, color: '#666', fontFamily: 'PLight', marginTop: -120}}>Your Own Virtual Trainer</Text>
        </View> 
        <TouchableOpacity
          onPress={() => navigation.navigate('First')}
          style={{
            backgroundColor: '#93bbff', //removed backhground color to make it transparent
            padding: 10,
            width: '80%',
            height: '6%',
            borderRadius: 20, //this is what makes the border of the button round
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center',
            marginBottom: 90,
            borderWidth: 0.5, //added a white border
            borderColor: '#000000' //color of the border
          }}>
          <Text 
            style={{
              fontSize:18,
              color:'#fff',
              fontFamily:'PBlack',
              textAlign:'center'
            }}> 
          Get Started 
          </Text>
          {/* <Ionicons name="arrow-forward-outline" size={22} color="#fff" /> */}
        </TouchableOpacity>
      </SafeAreaView>
      );
  };

  export default OnboardingScreen;