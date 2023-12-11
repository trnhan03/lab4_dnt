
import React from 'react';
import Login_screen from './screen/login_screen';
import SignUp_screen from './screen/sign_up_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyProvider } from './components/Provider';
import Main_screen from './screen/main_screen';

import {
  StyleSheet,
} from 'react-native';



const Stack = createNativeStackNavigator();


function App(){
  

  return (
    <MyProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Login' 
        component={Login_screen} 
        options={{  
        headerShown: false,  
        }} />
        <Stack.Screen 
        name='SignUp' 
        component={SignUp_screen} 
        options={{  
        headerShown: false,  
        }} />
        <Stack.Screen 
        name='main'
        component={Main_screen}
        options={{  
          headerShown: false,  
          }} />
      </Stack.Navigator>
    </NavigationContainer>
    </MyProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex:1
  },
  
});

export default App;
