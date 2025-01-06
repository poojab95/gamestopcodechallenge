import {Text, View, Image, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { MinusIcon, PlusIcon, TrashIcon } from 'react-native-heroicons/outline';
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/productSlice';
import { useNavigation } from '@react-navigation/native';

const CartProduct = ({item}:any) => {
    const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image source={{uri: item.image}} alt='product-image' style={styles.img}/>  
        <View style={styles.textView}>
            <Text style={styles.textStyle}>{item.type}</Text>
        </View>
      </View> 
       <View style={styles.containerButtons}>
        <Pressable onPress={() => dispatch(decreaseQuantity(item))}>
            <MinusIcon size={16} color='black'/>
        </Pressable>
        <Text>{item?.quantity}</Text>
        <Pressable onPress={() => dispatch(increaseQuantity(item))}>
            <PlusIcon size={16} color='black'/>
        </Pressable>
      </View>
      <Text style={styles.textStyle}>${item?.price * item?.quantity}</Text>
      <View>
        <Pressable onPress={() => dispatch(removeFromCart(item))}>
        <TrashIcon size={16} color='black'/>
        </Pressable>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal:5,
        backgroundColor: '#fff',
        flexDirection   : 'row',
        borderRadius: 10,
        borderBlockColor: 'gray',
       borderColor: 'gray',
    },
    containerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 70,
        borderWidth: 1,
        marginLeft: 10,
        height: 30,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: 'gray',
    },
    imgView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 180,
    },
    img: {
        width: 100,
        height: 100,
    },
    textView: {
        width: 70,
        justifyContent: 'space-between',
        marginLeft: 10,
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default CartProduct;