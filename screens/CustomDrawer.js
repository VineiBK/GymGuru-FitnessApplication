import { View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';

import { useContext } from 'react';

import { usePoints } from './PointsContext';
import { AuthContext } from '../screens/AuthContext';

import { useUser } from '../screens/UserContext';

const CustomDrawer = (props) => {
  const { userName } = useUser();
  const {logout} = useContext(AuthContext);

  const { points } = usePoints();
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
    <View style={{flex:1}}>
    <DrawerContentScrollView
      {...props} //Setting the background color at the top of the drawer.
      contentContainerStyle={{backgroundColor: '#7397FF'}}> 
        <View style={{ flexDirection: 'column', alignItems: 'center', paddingHorizontal: 10 }}>
        <ImageBackground
          source={require('../assets/profilepicture.jpg')}
          style={{height: 80, width: 80, marginBottom: 10, marginRight:10}}
          imageStyle={{borderRadius:80}} //this command makes the image round
        />
        <Text style={{color:'#fff', fontSize:18, fontFamily:'PBold', marginBottom:5,}}>{ userName }</Text>
        <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'PLight' }}>
      Points: {points}
    </Text>
        </View>
      <View style={{flex:1, backgroundColor:'#fff',paddingTop:10}}> 
      <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
    <View style={{padding: 20, borderTopWidth:1, borderTopColor:'#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
             <Ionicons name="share-social-outline" size={22} />
             <Text
               style={{
                 fontSize: 15,
                 fontFamily: 'PLight',
                 marginLeft: 5,
               }}>
               Tell A Friend
             </Text>
           </View>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => {logout()}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
             <Ionicons name="exit-outline" size={22} />
             <Text
               style={{
                 fontSize: 15,
                 fontFamily: 'PLight',
                 marginLeft: 5,
               }}>
               Log Out
             </Text>
           </View>
         </TouchableOpacity>
       </View>
     </View>
  );
};

export default CustomDrawer;