import React from 'react' 
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import CustomDrawer from '../screens/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ProgressTrackingScreen from '../screens/ProgressTrackingScreen';
import CommunityForumScreen from '../screens/CommunityForumScreen';
import WorkoutStack from './WorkoutStack';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{ 
        headerShown:false,
        drawerActiveBackgroundColor:'#93BBFF', 
        drawerActiveTintColor:'#FFF',
        drawerInactiveTintColor:'#333',
        drawerLabelStyle:{
          marginLeft:-25, 
          fontFamily:'PLight',
          fontSize:15,
        },
        }}>
        <Drawer.Screen component={TabNavigator} name="Home" options={{
          drawerIcon:({color}) =>(
            <Ionicons name="home-outline" size={22} color={color}/> 
          )
          }} />
        <Drawer.Screen component={ProfileScreen} name="Profile" options={{
          drawerIcon:({color}) =>(
            <Ionicons name="person-outline" size={22} color={color}/>
          )
          }} />
        <Drawer.Screen component={LeaderboardScreen} name="Leaderboard" options={{
          drawerIcon:({color}) =>(
            <Ionicons name="rocket-outline" size={22} color={color}/>
          )
          }} />
        <Drawer.Screen component={ProgressTrackingScreen} name="Progress Tracking" options={{
          drawerIcon:({color}) =>(
            <Ionicons name="stats-chart-outline" size={22} color={color}/>
          )
          }} />
        <Drawer.Screen component={CommunityForumScreen} name="Community Forum" options={{
          drawerIcon:({color}) =>(
            <Ionicons name="people-outline" size={22} color={color}/>
          )
          }} />  
        <Drawer.Screen component={WorkoutStack} name="Workouts" options={{ drawerItemStyle: { display: 'none' },
        }} />  
      </Drawer.Navigator>
  );
}

export default AppStack;