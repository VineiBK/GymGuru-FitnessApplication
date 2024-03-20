import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import Ionicons from 'react-native-vector-icons/Ionicons';


const logoImg = require("./kcaltrackimage.png");
const dotImg = require("./thirddot.png");
// const imagegymguru = require("./assets/mainlogodesign.png");

const ThirdPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        {/* <Image source={require("./assets/mainlogodesign.png")} style={{ width: 500, height: 300 }} /> */}
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 200 }}>
        <Image source={logoImg} style={{ width: 400, height: 300}} />
        <Text style={{ fontSize: 25, color: '#000000', fontFamily: 'PBold', marginBottom:190 }}> Track Your Calories </Text>
        <Text style={{ fontSize: 14, color: '#000000', fontFamily:"PLight", marginTop:-170, textAlign: 'center'}}> Track your calories & stay ahead of your dietary. </Text>
        {/* <Image source={dotImg} style={{ width: 70, height: 70, marginTop: 10 }} /> */}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')} // Navigate back to Main screen
        style={{ 
          backgroundColor: '#93bbff',
          padding: 10,
          width: '50%',
          height: '6%',
          borderRadius: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 90,
          borderWidth: 0.5,
          borderColor: '#000000'
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}></View>
          <Text 
            style={{
              fontSize:20,
              color:'#fff',
              fontFamily:'PBlack',
              textAlign:'center',
            }}> 
          Next 
          </Text>
        <Ionicons name="arrow-forward-outline" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ThirdPage;