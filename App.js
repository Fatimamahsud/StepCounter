import React, {useEffect,useState} from 'react';
import BottomBar from './src/Navigation/BottomBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
function App() {
    return (
      <BottomBar/>
    );
}
export default App;

