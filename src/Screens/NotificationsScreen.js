import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomBar from '../Navigation/BottomBar';
import Charts from '../Components/Charts';
import Toggle from '../Components/Toggle';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    useWindowDimensions,
    TouchableOpacity,
} from 'react-native';
import CircularP from '../Navigation/CircularP';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NotificationsScreen = (props) => {
  const onPress = () => setCount(prevCount => prevCount + 1);
    return (
      <View style={styles.home}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.header1} >
          <Text style={styles.text}>Notifications</Text>

        </TouchableOpacity>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.text1}>Goals Achieved</Text>
    <View style={styles.container}>            
        <TouchableOpacity style = {styles.card}>    
        <Text style = {styles.cardtxt} >
                    Steps
                </Text>        
                <Text style = {styles.tg}>  <Toggle /> </Text>

        </TouchableOpacity>
        <TouchableOpacity style = {styles.card}>
                <Text style = {styles.cardtxt}>
                    Calories
                </Text>
                <Text style = {styles.tg}>  <Toggle /> </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.card}>
                <Text style = {styles.cardtxt}>
                    Distance
                </Text>
                <Text style = {styles.tg}>  <Toggle /> </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.card1}>
                <Text style = {styles.cardtxt1}>
                    Goals Pogress
                </Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {/* <Text styles={styles.text2}>Tap here after Each step</Text> */} 
      </TouchableOpacity>
      <Text style={styles.text1}>More</Text>

      <TouchableOpacity style = {styles.card2}>    
        <Text style = {styles.cardtxt} >
                    Weekly
                </Text>        
                <Text style = {styles.tg}>  <Toggle /> </Text>

        </TouchableOpacity>
        <TouchableOpacity style = {styles.card2}>    
        <Text style = {styles.cardtxt} >
                    Daily
                </Text>        
                <Text style = {styles.tg}>  <Toggle /> </Text>

        </TouchableOpacity>
        <TouchableOpacity style = {styles.card2}>    
        <Text style = {styles.cardtxt} >
                    Monthly
                </Text>        
                <Text style = {styles.tg}>  <Toggle /> </Text>

        </TouchableOpacity>
      
    </View>
        </View>   
        <View style={styles.boxContainer1}>
        </View>
        
      </View>
    )
}
const styles = StyleSheet.create({
  home: {
    backgroundColor: '#13005A',
    color: '#A7727D',
    width: windowWidth,
    height: windowHeight,
    flex:1,
    flexDirection: "column",
  },
  
  text4: {
    color:'#13005A',
    fontSize:15,
    fontWeight:'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 10,
  },
  item:{
    backgroundColor: '#B9F3FC',
    width:100,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:40,
    margin:20
    
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  header: {
    backgroundColor: '#00337C',
    color: '#B6EADA',
    width: windowWidth,
    // height : windowHeight * 0.07,
    opacity:1,
    // justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 20,
    flex:1.3,
    flexDirection: 'row',
    justifyContent:'space-evenly',

  },
  header1:{
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-evenly',
  },
  tg:{
marginLeft:350,
marginBottom:20,
  },
  text: {
    color: '#B9F3FC',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    color: '#13005A',
    fontSize: 60,
    fontWeight: 'bold',
  },

  logo: {
    width:40,
    height: 40,
  },

  text1: {  
    marginTop: 12,
    color: '#B9F3FC',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
    opacity:0.8,

  },
  boxContainer:{    
            backgroundColor: '#00337C',
            color: '#93C6E7',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            marginTop: 10,
            // flexDirection: 'column',
            borderRadius: 30,
            flex:11,
            
        },
        boxContainer1:{    
          backgroundColor: '#00337C',
          color: '#93C6E7',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30,
          flex:1.5,
          
      },
      card:{
          width:windowWidth*0.96,
          height: windowHeight*0.09,
          borderRadius:20,
          borderColor:'#93C6E7',
          borderWidth:1,
          marginTop:10,
        //   alignItems:'center'
        justifyContent:'center', 
      },
      card1:{
        width:windowWidth*0.96,
        height: windowHeight*0.09,
        // borderRadius:20,
        borderColor:'#93C6E7',
        borderWidth:2,
        marginTop:30,
      //   alignItems:'center'
      justifyContent:'center',
        
    },
      cardtxt:{
        color: '#B9F3FC',
        fontSize: 17,
        marginTop:10,
        fontWeight: 900,
        paddingLeft:20,
      },
      cardtxt1:{
        color: '#B9F3FC',
        fontSize: 17,
        fontWeight: 900,
        paddingLeft:20,
      }
})

export default NotificationsScreen;