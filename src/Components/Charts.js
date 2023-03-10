import React, {useState} from 'react';
import {
  Text,
  Dimensions,
  View,
  StyleSheet,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import { TouchableOpacity } from 'react-native-gesture-handler';

function Charts() {
  return (     
<View>
    <View style={styles.te}>
    <TouchableOpacity style={styles.item}>
    <Text style={styles.text1}>Your Monthly Record</Text>
    </TouchableOpacity>
    </View>
    
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#13005A",
      backgroundGradientFrom: "#00337C",
      backgroundGradientTo: "#00337C",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
   
);
}

const styles = StyleSheet.create({
    text1: {
      color:'#13005A',
      fontSize:15,
      fontWeight:'bold',
      alignContent:'center',
      justifyContent:'center',
    },
    item:{
        backgroundColor: '#B9F3FC',
        width:180,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40,
        marginLeft:120,
        marginBottom:20,
        alignContent:'center',
        justifyContent:'center',
        
      },
   
})
export default Charts;

