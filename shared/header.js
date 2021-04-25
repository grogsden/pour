import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#287e9e'

  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#e4a834',
    letterSpacing: 1,
    
    
  },
  icon: {
    position: 'absolute',
    left: 0,
    color: '#e4a834',
    backgroundColor: '#287e9e'
  },
  headerTitle: {
    flexDirection: 'row',
    backgroundColor: '#287e9e'
  },
  
});