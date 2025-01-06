import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import SideMenu from '../components/SideMenu';

const DrawerStack = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <DrawerStack.Navigator drawerContent={() => <SideMenu />}>
        <DrawerStack.Screen name="StackScreens" component={StackNavigation} options={{headerShown: false}}/>
    </DrawerStack.Navigator>
  )
}

export default DrawerNavigation;
