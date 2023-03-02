import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {
  Text,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

function CircularP() {
  const [value,setValue] = useState(0);
  return (
    <View>  
   <CircularProgress    
     radius = {100}
     value = {100}
     textColor = '#243'
     fontSize = {15}
     valueSuffix = {''}
     inActiveStrokeColor={'#13005A'}
     inActiveStrokeOpacity = {0.2}  
     inActiveStrokeWidth = {6}
     duration = {3000}
    //  sx={{color:"red"}} 
     color="secondary" 
     onAnimationComplete = {() => setValue(50)}/>
        </View>
);
}
const styles = StyleSheet.create({
  logo1: {
    width:20,
    height: 20,
  },
  boxContainer1:{    
    backgroundColor: '#AEE2FF',
    color: '#93C6E7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: 100,
    height:100,
    
}
})

export default CircularP;