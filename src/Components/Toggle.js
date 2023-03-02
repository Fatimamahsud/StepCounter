import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ToggleSwitch from 'toggle-switch-react-native'

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
  Switch
} from 'react-native';
const Tab = createBottomTabNavigator();

function Toggle() {
  const [value,setValue] = useState(0);
     const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
      <View style={styles.container}>
        <Switch
          trackColor={{false: '#767577', true: '#B9F3FC'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Toggle;