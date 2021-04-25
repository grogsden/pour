import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutStack } from './aboutStack';
import { HomeStack } from './homeStack';
import { HistoryStack } from './historyStack';




const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name ="Home" component={HomeStack} />
            <Drawer.Screen name ="About" component={AboutStack} />
            <Drawer.Screen name ="History" component={HistoryStack} />
        </Drawer.Navigator>
        </NavigationContainer>
    
  )
}

