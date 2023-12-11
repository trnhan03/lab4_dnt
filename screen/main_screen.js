import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home_screen from './Home_screen';
import Categories_screen from './categories';
import Cart_screen from './cart';
import Profile_screen from './profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

const Tab=createBottomTabNavigator();

export default function Main_screen({navigation}) {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={Home_screen}
            options={{
                tabBarIcon: () => (
                    <Icon name='home' size={40} color="#00B0F0" />
                ),
              }}
            />
            <Tab.Screen 
            name="Categories"
            component={Categories_screen}
            options={{
                tabBarIcon: () => (
                    <Icon name='navicon' size={35} color="#00B0F0" />
                ),
              }}
            />
            <Tab.Screen
             name="Cart" 
             component={Cart_screen}
             options={{
                tabBarIcon: () => (
                    <Icon name='shopping-cart' size={35} color="#00B0F0" />
                ),
              }}
             />
            <Tab.Screen 
            name="Profile" 
            component={Profile_screen}
            options={{
                tabBarIcon: () => (
                    <Icon name='user-md' size={35} color="#00B0F0" />
                ),
              }}
            />
        </Tab.Navigator>
      );
}
const styles=StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width:'100%',
    height:'100%',
    gap:10
  },
  
})