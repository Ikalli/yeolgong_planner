import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Mode from './components/mode';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => alert("Yeolgong Planner!")}
        style={styles.button}>
        <Text>Click Me!</Text>
      </TouchableOpacity>
      <Text style={styles.intro}>Yeolgong Planner!!</Text>
      <Mode />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: 'white',
  },

  intro: {
    color: 'white',
  }
});
