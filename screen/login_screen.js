import React, { useContext, useState } from 'react';
import {Input_area} from '../components/component';
import { MyContext } from '../components/Provider';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import Home_screen from './Home_screen';



function check_login(email,password,id_user,setid_user,navigation) {
  fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(json=>{
              for(let i in json) {
                if(json[i].email==email && json[i].password==password) {
                  setid_user(json[i].id);
                  id_user=json[i].id;
                }
              } 
            })
            .then(()=>{
              if(id_user!=0) {
                Alert.alert('dang nhap thanh cong'+id_user);
                navigation.replace('main')
              }
              else {
                Alert.alert('dang nhap that bai')
                navigation.replace('main')
              }
            })

  
}

export default function Login_screen({navigation}) {
  const{email,setemail,password,setpassword,id_user,setid_user} =useContext(MyContext);
    return (
        <View style={styles.container}>
          <Image 
            style={styles.img}
            source={require('../img_source/logo.png')}
          />
          <Text style={styles.title}>
          Welcome
          </Text>
          <Input_area icon_name={'send'} plhd={'Email'} set={setemail}/>
          <Input_area icon_name={'lock'} plhd={'Password'} set={setpassword}/>
          <Text style={styles.sub_text}>Forgot password?</Text>
          <TouchableOpacity style={styles.btn} onPress={()=>check_login(email,password,id_user,setid_user,navigation)}>
            <Text style={{color:'white',textAlign:'center',fontSize:30}}>Login</Text>
          </TouchableOpacity>
          <Text style={{fontWeight:800,fontSize:20}}>Or login with</Text>
          <View style={{flexDirection:'row',gap:10}}>
            <Image 
              style={styles.small_img}
              source={require('../img_source/facebook.png')}
            />
            <Image 
              style={styles.small_img}
              source={require('../img_source/google.png')}
            />
            
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>{
              navigation.navigate('SignUp');
            }}>
            <Text style={{color:'blue',fontWeight:700}}> Sign up here!</Text>
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