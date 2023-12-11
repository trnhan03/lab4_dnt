import React,{useContext} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    View,
    TextInput,
  } from 'react-native';



  
  export function Input_area({icon_name,plhd,set}) {

    return(
        <View style={styles.contain}>
            <Icon name={icon_name} size={40} color="#00B0F0" />
            <TextInput style={styles.input_area} placeholder={plhd} onChangeText={(text)=>{set(text)}}>
              
            </TextInput>   
        </View>
    );
  }
  const styles=StyleSheet.create({
    input_area : {
      flex:1,
      fontSize:25,
      color:'gray',
    },
    contain: {
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      gap:15, 
      borderWidth:2,
      borderColor:'black',
      borderRadius:5,
      margin:5,
      paddingLeft: 5
    }
  })

