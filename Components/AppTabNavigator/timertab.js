import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TimerTab extends React.Component {
	render(){
		return(
			<View style={styles.container}>
				<Text>열공플래너 - TimerTab</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		color: 'black',
		flex: 1,
		alignItems: 'center',
    justifyContent: 'center',
	}
});