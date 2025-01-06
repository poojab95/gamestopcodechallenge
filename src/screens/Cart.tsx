import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CartProduct from '../components/CartProduct';
import { ProductsProps } from '../type';
import { clearCart } from '../redux/productSlice';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window');

const Cart = () => {
  const {productData} = useSelector((state:any) => state.products);
  const [subTotal, setSubTotal] = useState(0);
  console.log(productData);
    const dispatch = useDispatch();
    const navigation:any = useNavigation();

    useEffect(() => {
      let amt = 0;
      productData.map((item:ProductsProps) => {
        amt += item.price * item.quantity;
        return;
      });
      setSubTotal(amt);
    },[productData]);

  return (
    <>
    <View>
          <ScrollView contentContainerStyle={{paddingBottom: 100, margin:10}}>
          {productData?.length > 0 ?
          <>
            <View>
          {productData.map((item:ProductsProps) => {
            return (
              <CartProduct 
              key={`${item._id}-${item.selectedVariation}`}
               item={item}/>
            )
          })}
            </View>
          </>
     :  <Text>Your cart is empty</Text>}
            </ScrollView>
    </View>
     <TouchableOpacity
     style={styles.button}
     onPress={() => dispatch(clearCart())}>
            <Text style={styles.buttonText}>
             Clear Cart </Text>
          </TouchableOpacity>
    
          <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.buttonText}>Navigate to Checkout</Text>
          </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.pop('2')}>
                      <Text style={styles.buttonText}>Back to Products Screen</Text>
                    </TouchableOpacity>

          <View style={styles.subTotalContainer}>
            <Text style={styles.subTotal}>
              SubTotal : {subTotal}
            </Text>
          </View>
    </>
    )
} 

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#000',
    width: width-40,
    padding: 10,
    borderRadius: 5,
    position: 'relative',
    paddingHorizontal:10,
    paddingVertical: 10,
    marginTop: 20,
    bottom: 10,
    left: 20,
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  subTotalContainer:{
   padding:20,
   backgroundColor: '#fff',
  },
  subTotal:{
    marginTop: 20,
    bottom: 10,
    left: 20,
    fontSize: 20,
    fontWeight: 'bold',
  }
})


export default Cart;