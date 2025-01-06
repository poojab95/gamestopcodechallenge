import React, { useState } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import DropdownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/productSlice';
import Header from '../components/Header';

const { width, height } = Dimensions.get('window');

const ProductDetail = ({ route }: any) => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const { item } = route.params;
  const [open, setOpen] = useState(false); 
  const [selectedVariation, setSelectedVariation] = useState(item.variations[0]);
  const [items, setItems] = useState(item.variations.map(v => ({ label: v, value: v }))); 
  const id = item.id;

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.itemName}>
          {item.name}
        </Text>
        <View style={styles.imgView}>
          <Image source={{ uri: item?.image }} alt='product-image' style={styles.img} />
        </View>
        <View>
          <Text style={styles.descText}>
            {item.details.description}
          </Text>
          <Text style={styles.detailsText}> Price :
            ${item.price}
          </Text>
          <Text style={styles.detailsText}>Select Variation:</Text>
          <DropdownPicker
            open={open}
            value={selectedVariation}
            items={items}
            setOpen={setOpen}
            setValue={setSelectedVariation}
            setItems={setItems}
            containerStyle={{ height: 70 }}
            style={styles.dropdown}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(addToCart({ ...item, selectedVariation }));
              navigation.navigate('Cart');
            }}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Back to Products</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'relative',
    height: height
  },
  imgView: {
    width: width,
    height: height / 2,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    //arginTop: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
  descText: {
    fontSize: 18,
    // fontWeight: 'bold',
    //arginTop: 10,
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000',
    width: width - 40,
    padding: 10,
    borderRadius: 5,
    position: 'relative',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 20,
    bottom: 10,
    left: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  dropdown: {
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ProductDetail;