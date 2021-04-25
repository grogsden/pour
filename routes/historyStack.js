import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import History from '../screens/history'
import Header from '../shared/header';
import HeaderBg from '../shared/headerBg';


const { Navigator, Screen } = createStackNavigator();

export const HistoryStack = ({ navigation }) => (    
    <Navigator
        headerMode='float'        
        screenOptions={{
            headerTintColor: '#444',
            headerStyle: { backgroundColor: '#ccc', height: 80 },
        }}
    >
        <Screen
            name='History'
            component={History}
            options={{
                headerTitle: () => <Header navigation={navigation} title='Brew History'/>,
                headerBackground: () => <HeaderBg/>
                           
            }}
        />
      
    </Navigator>
);