import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import HomeTab from './AppTabNavigator/hometab';
import TileTab from './AppTabNavigator/tiletab';
import TimerTab from './AppTabNavigator/timertab';
import SettingTab from './AppTabNavigator/settingtab';
import Icon from 'react-native-vector-icons/Ionicons';

const AppTabNavigator = createMaterialTopTabNavigator(
	{
		Home: {screen: HomeTab},
		Tile: {screen: TileTab},
		Timer: {screen: TimerTab},
		Setting: {screen: SettingTab},
	},
	{
		tabBarPosition: 'bottom',
		showLabel: false,
		showIcon: true,
	},
);

const AppTabContainer = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
	static navigationOptions = ({ navigations }) => {
		return {
			headerLeft: () => 
			<Icon.Button
				name='ios-help-circle-outline'
				size={30}
				onPress={() => alert('Help')}
				color='#373737'
				backgroundColor='white'
			/>,
			headerRight: () => 
			<Icon.Button
				name='ios-moon'
				size={30}
				onPress={() => alert('Mode')}
				color='#373737'
				backgroundColor='white'
			/>,
			headerTitle: () => (
				<View style={{ alignItems: 'center', flex: 1, justifyContent: 'center'}}>
					<Text style={{ fontSize: 25, color: '#42d6e2' }}>열공플래너</Text>
				</View>
			),
			headerTitleAlign: 'center',
		}
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