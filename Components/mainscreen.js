import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import HomeTab from './AppTabNavigator/hometab';
import TileTab from './AppTabNavigator/tiletab';
import TimerTab from './AppTabNavigator/timertab';

const AppTabNavigator = createMaterialTopTabNavigator(
	{
		Home: {screen: HomeTab},
		Tile: {screen: TileTab},
		Timer: {screen: TimerTab},
	},
	{
		tabBarPosition: 'bottom',
		showLabel: false,
		showIcon: true,
	}

)

const AppTabContainer = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
	static navigationOptions = {
		title: '열공플래너',
	}	

  render() {
    return (
      <AppTabContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});