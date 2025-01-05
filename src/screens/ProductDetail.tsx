import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet, Pressable} from 'react-native';
import BannerVariation from '../components/BannerVariation';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const ProductDetail= ({route}:any) => {
 const navigation:any = useNavigation();
  const {item} = route.params;
  const id = item.id;
  return (
   <View style={styles.container}>
    <Text style = {styles.itemName}>
      {item.name}
      </Text>
    <View style={styles.imgView}>
      <Image source={{uri: item?.image}} alt='product-image'style={styles.img}/>
    </View>
    <View>
    <Text style={styles.descText}>
        {item.details.description}
    </Text>
    <Text style={styles.detailsText}> Release Date : 
      {item.details.releaseDate}
    </Text> 
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Add to Cart</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={() => navigation.goBack()}>
      <Text style={styles.buttonText}>Back to Products</Text>
    </Pressable>
    </View>
    {/* <BannerVariation title={item.variations[0]}/> */}
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'relative',
    height: height
  },
  imgView:{
    width: width,
    height: height/2,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
  descText:{
    fontSize: 20,
    // fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  detailsText:{
    fontSize: 18, 
    marginBottom: 10,
    fontWeight: 'bold',
  },
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
  }
});

export default ProductDetail;