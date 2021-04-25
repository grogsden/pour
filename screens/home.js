import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Pour</Text>
            <Text style={globalStyles.ratio}>Coffee/Water: 30g/600g</Text>
        </View>
        
    )
}
