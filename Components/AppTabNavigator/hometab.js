import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';

export default class HomeTab extends React.Component {
	render(){
		let moment = require('moment');
		let date1 = moment("20201007");
		let now = moment();

		return(
			<View style={styles.container}>
				<Text style={styles.day}>{date1.diff(now, 'days')}일 뒤면 시험 끝!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		color: 'black',
		flex: 1,
		alignItems: 'center',
	},
	day: {
		fontSize: 20,
		marginTop: 10
	}
});