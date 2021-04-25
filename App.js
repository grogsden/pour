import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pour</Text>
      <Text style={styles.ratio}>Coffee/Water: 30g/600g</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#287e9e',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 20,
    marginLeft: 5,
    color: '#e4a834',
    fontSize: 80,
    fontWeight: 'bold',
  },
  ratio: {
    fontSize: 50,
    fontWeight: '900',
    color: '#b3346c'
  }
});
