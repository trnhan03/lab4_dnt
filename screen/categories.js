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

export default function Categories_screen({navigation}) {
    return (
        <View style={styles.container}>
          <Text>this is catigories</Text>
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
  
})