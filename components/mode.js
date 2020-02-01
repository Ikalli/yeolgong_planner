import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Mode(){
	return(
		<TouchableOpacity 
			style={styles.modebutton}
			onPress={() => alert('Mode Change!')}>
			<Text>Mode Change</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	modebutton: {
		backgroundColor: 'yellow',
	},
});