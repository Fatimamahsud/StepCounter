import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SplashScreen = () => {
  return (
    <View>
      <TouchableOpacity >
        <Text style={{top: 30, fontSize: 30, alignItems:'center',justifyContent:'center'}}>SplashScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;