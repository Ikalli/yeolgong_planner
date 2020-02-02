import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TileTab extends React.Component {
	render(){
		return(
			<View style={styles.container}>
				<Text>열공플래너 - TileTab</Text>
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