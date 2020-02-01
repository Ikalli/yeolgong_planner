import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';

export default class HomeTab extends React.Component {
	render(){
		return(
			<View>
				<Text style={styles.text}>열공플래너 - HomeTab</Text>
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