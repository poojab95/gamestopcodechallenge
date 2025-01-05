import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Dimensions } from 'react-native';
import products from '../data/products.json';
import { Item, NavigationProps } from '../type';
import {ShoppingCartIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

type Product = {
  id: string;
  name: string;
  image: string;
  type: string;
  variations: string[];
  details: {
    description: string;
    platforms?: string[];
    releaseDate?: string;
    color?: string;
    includes?: string[];
    material?: string;
  };
};

const {height, width} = Dimensions.get('window');

const ProductListing = () => {
  const navigation:any = useNavigation();
  const [productsArray, setProductsArray] = useState<Product[]>([]);
  const [isloading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      setProductsArray(products); // Load products from JSON
    } catch (error) {
      console.log('Error fetching products:', error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const RenderItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.productView} onPress={() => navigation.navigate('ProductDetail', {item})}>
      <View style={styles.item}>
        <View>
        <Image style={styles.img} source={{uri: item?.image}} alt='product-image'/>
        </View> 
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.type}>{item.type}</Text>
      </View>

      <TouchableOpacity style={{position: 'absolute', right: 10, bottom: 10}}>
      <ShoppingCartIcon style={styles.shoppingcartIcon} size={20} color={'#000'}/>
      </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {isloading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text style={styles.title}>Products</Text>
          {<FlatList
            data={productsArray}
            keyExtractor={(item) => item.id}
            renderItem={RenderItem}
          />}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { marginBottom: 8, padding: 8, backgroundColor: '#f0f0f0' },
  name: { fontSize: 18 },
  type: { fontSize: 14, color: 'gray' },
  productView: {
    flex:1,
    height: height/3,
    borderWidth: 0.5,
    borderColor: 'gray',
    margin: 10,
  },
  imgView: {
    width: width,
    height: height/2,
  },
  img: {
    width:'100%',
    height: '80%',
    objectFit: 'cover',
  },
  shoppingcartIcon: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 7,
    backgroundColor: '#FFDB58',
  }
});

export default ProductListing;