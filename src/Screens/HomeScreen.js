import React, {useState} from 'react';
import BottomBar from '../Navigation/BottomBar';
import Charts from '../Components/Charts';
import Walking from '../assets/svg/Walking.svg'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import CircularP from '../Navigation/CircularP';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = (props) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
    return (
      <View style={styles.home}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.header1} >
          <Image style = {styles.logo} source={require('../assets/pedometer.png')} />
          <Text style={styles.text}>Pedometer</Text>

        </TouchableOpacity>
      </View>
      
      <View style={styles.boxContainer}>
        <Text style={styles.text1}>Your Activities</Text>
        <View style={styles.container}>
      <View style={styles.countContainer}>
      <CircularP styles = {styles.cir} />
        {/* <Text>Count: {count}</Text> */}
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {/* <Text styles={styles.text2}>Tap here after Each step</Text> */}
        <TouchableOpacity style={styles.item}>    
        <Text style={styles.text4}>Calories</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.item}>    
        <Text style={styles.text4}>Distance</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.item}>    
        <Text style={styles.text4}>Time</Text>
         </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
              <Charts />

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
  con: {
    paddingTop:100,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  boxContainer:{    
            backgroundColor: '#00337C',
            color: '#93C6E7',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            marginTop: 10,
            alignItems: 'center',
            flexDirection: 'column',
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
          
      }
})

export default HomeScreen;