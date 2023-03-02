import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Walking from '../assets/svg/Walking.svg'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import NotificationsScreen from '../Screens/NotificationsScreen';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <>
      <NavigationContainer >
        <Tab.Navigator
          screenOptions={{     
            headerShown: false,
        //   tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,    
            // tabBarOptions: { showLabel: false },
            "tabBarStyle": [
                {
                  position:'absolute',
                  left:20,
                  right:20,
                  elevation:0,
                  backgroundColor:'#00337C',
                  borderRadius:15,
                  height:80
                },
                null
              ]
    
          }}
        >
          <Tab.Screen
            name=" "
            component={HomeScreen}
            options = {{tabBarIcon:({focused})=>(
              <View>
                <Walking/>
                <Text>
                Home
              </Text>
              </View>
              
            )}}
          />
          <Tab.Screen
            name="   "
            component={NotificationsScreen}
            options = {{tabBarIcon:({focused})=>(
              <View>
                <Walking/>
                <Text>
                Notifications
              </Text>
              </View>
              
            )}}
          />
          <Tab.Screen
            name="  "
            component={SettingsScreen}
            options = {{tabBarIcon:({focused})=>(
              <View>
                <Walking/>
                <Text>
                Settings
              </Text>
              </View>
              
            )}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default BottomBar;