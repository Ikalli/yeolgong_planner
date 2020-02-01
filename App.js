import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createBottomTabNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './Components/mainscreen';

const AppStackNavigator = createStackNavigator({
  Main: {screen: MainScreen}
});

export default createAppContainer(AppStackNavigator);