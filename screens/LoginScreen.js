import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useContext} from 'react';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../screens/CustomButton';
import InputField from '../screens//InputField';

import { AuthContext } from '../screens/AuthContext';

const LoginImg = require("../screens/loginimage.png");

const LoginScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);
  return (
    <SafeAreaView style={{flex: 1,justifyContent:'center',backgroundColor:'#fff'}}>
      <View style={{paddingHorizontal:25}}>
      <View style={{alignItems:'center'}}>
      <Image source={LoginImg} style={{height: 300 ,width: 350 }} 
      />
      </View>
      <Text style={{fontFamily:'PBold', fontSize:25, color:'#333', marginBottom: 30}}>Login 
      </Text>

      <InputField 
        label={'Email ID'}
        icon={
          <MaterialIcons
            name="alternate-email"
            size={20} 
            color="#666" 
            style={{marginRight: 5}}
          />
        }
        keyboardType="email-address"
      />
      <InputField 
        label={'Password'}
        icon={
          <Ionicons
            name="lock-closed-outline"
            size={20} 
            color="#666" 
            style={{marginRight: 5}}
          />
        }
        inputType="password"
        fieldButtonLabel={"Forgot?"}
        fieldButtonFunction={() => {}}
      />

      <CustomButton label={"Login"} onPress={() => {login()}} />

        <Text style={{textAlign:'center', color:'#666', marginBottom:30, fontFamily:'PLight'}}>Or, login with ...
        </Text>
        <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:30}}>
        <TouchableOpacity onPress={() => {}} style={{borderColor:'#ddd', borderWidth:2,borderRadius:10,paddingHorizontal:30, paddingVertical:10}}>
          <Ionicons name="logo-google" size={25} style={{height:24, width:24}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{borderColor:'#ddd', borderWidth:2,borderRadius:10,paddingHorizontal:30, paddingVertical:10}}>
          <Ionicons name="logo-facebook" size={25} style={{height:24, width:24}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{borderColor:'#ddd', borderWidth:2,borderRadius:10,paddingHorizontal:30, paddingVertical:10}}>
          <Ionicons name="logo-twitter" size={25} style={{height:24, width:24}} />
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', justifyContent:'center', marginBottom: 30}}>
        <Text style={{fontFamily:'PLight'}}>New to the app?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{color:'#7e97ff', fontFamily:'PBold'}}> Register</Text>
        </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;