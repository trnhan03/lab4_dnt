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

export default function Home_screen({navigation}) {
    return (
        <View style={styles.container}>
          <Text style={styles.slogan_text}>Buy and Pay </Text>
          
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
  slogan_text: {
    color:'#F05941',
    fontSize:30,
    fontStyle:'italic',
  }
  
})