import React from 'react';
import {Input_area} from '../components/component';
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

export default function SignUp_screen({navigation}) {
    return (
        <View style={styles.container}>
          <Image 
            style={styles.img}
            source={require('../img_source/logo.png')}
          />
          <Text style={styles.title}>
            Create New Account
          </Text>
          <Input_area icon_name={'user'} plhd={'Enter username'}/>
          <Input_area icon_name={'send'} plhd={'Enter email'}/>
          <Input_area icon_name={'lock'} plhd={'Enter password'}/>
          <Input_area icon_name={'lock'} plhd={'Confirm password'}/>
          <TouchableOpacity style={styles.btn}>
            <Text style={{color:'white',textAlign:'center',fontSize:30}}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row'}}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={()=>{
              navigation.navigate('Login')
            }}>
            <Text style={{color:'blue',fontWeight:700}}> Login now!</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  img:{
    width:200,
    height:200,
  },
  title: {
    fontSize:35,
 
  },
  sub_text: {
    alignSelf:'flex-end',
    marginRight:5,
    textDecorationLine:'underline',
    color:'red'
  },
  btn:{
    color:'white',
    backgroundColor:'#00B0F0',
    width:'90%',
    borderRadius:5,
    paddingVertical:10
  },
  small_img:{
    width:40,
    height:40
  }
})