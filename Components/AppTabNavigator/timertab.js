import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TimerTab extends React.Component {
	render(){
		return(
			<View>
				<Text style={styles.text}>열공플래너 - TimerTab</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		color: 'black',
		alignItems: 'center',
    justifyContent: 'center',
	}
});