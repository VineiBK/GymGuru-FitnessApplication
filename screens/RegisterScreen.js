import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Modal } from 'react-native'
import React, {useState, useEffect} from 'react'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import InputField from '../screens/InputField';
import CustomButton from '../screens/CustomButton';

// import DatePicker from 'react-native-date-picker';

const RegisterImg = require("../screens/signupimage.png");

const ImThereImage = require("../screens/screenimages/Vinei/HiThereOverlay.png");
const ImVineiImage = require("../screens/screenimages/Vinei/ImVineiOverlay.png");

const RegisterScreen = ({navigation}) => {

  const [firstOverlayVisible, setFirstOverlayVisible] = useState(true);
  const [secondOverlayVisible, setSecondOverlayVisible] = useState(false);

  const handleFirstOverlayTap = () => {
    setFirstOverlayVisible(false);
    setSecondOverlayVisible(true);
  };

  const handleSecondOverlayTap = () => {
    setSecondOverlayVisible(false);
  };


  return (
    <SafeAreaView style={{flex: 1,justifyContent:'center',backgroundColor:'#fff'}}>
      <ScrollView showsVerticalScrollIndicator={true} style={{paddingHorizontal:25}}>

      <Modal
        visible={firstOverlayVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setFirstOverlayVisible(false)}>
        <TouchableOpacity style={styles.overlay} onPress={handleFirstOverlayTap}>
          <Image source={ImThereImage} style={styles.overlayImage} />
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={secondOverlayVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSecondOverlayVisible(false)}>
        <TouchableOpacity style={styles.overlay} onPress={handleSecondOverlayTap}>
          <Image source={ImVineiImage} style={styles.overlayImage} />
        </TouchableOpacity>
      </Modal>


      <View style={{alignItems:'center'}}>
      <Image source={RegisterImg} style={{height: 300 ,width: 350 }} 
      />
      </View>
      <Text style={{fontFamily:'PBold', fontSize:25, color:'#333', marginBottom: 30}}>Register
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

        <Text style={{textAlign:'center', color:'#666', marginBottom:30, fontFamily:'PLight'}}>Or, register with email ...
        </Text>

      <InputField 
        label={'Full Name'}
        icon={
          <Ionicons
            name="person-outline"
            size={20} 
            color="#666" 
            style={{marginRight: 5}}
          />
        } 
      />

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
      />

       <InputField 
        label={'Confirm Password'}
        icon={
          <Ionicons
            name="lock-closed-outline"
            size={20} 
            color="#666" 
            style={{marginRight: 5}}
          />
        }
        inputType="password"
      />

      <CustomButton label={"Register"} onPress= {() => navigation.navigate('GenderSelector')} />

        <View style={{flexDirection:'row', justifyContent:'center', marginBottom: 30}}>
        <Text style={{fontFamily:'PLight'}}>Already registered?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color:'#7e97ff', fontFamily:'PBold'}}> Login</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  overlayImage: {
    width: '100%',
    height: '100%',
  },
});
export default RegisterScreen;