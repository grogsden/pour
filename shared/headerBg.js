import React from 'react';
import { StyleSheet, View, } from 'react-native';

export default function HeaderBg() {
    return(
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 3,
        borderRadius: 1,
        backgroundColor: '#287e9e',
        
        
    },
})
