import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ProductListing from '../screens/ProductListing';
import ProductDetail from '../screens/ProductDetail';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';

const RootStack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <RootStack.Screen name="ProductListing" component={ProductListing} options={{headerShown: false}} />
        <RootStack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false}} />
        <RootStack.Screen name="Cart" component={Cart} />
        <RootStack.Screen name="Checkout" component={Checkout} />
  </RootStack.Navigator>
  )
}

export default StackNavigation;