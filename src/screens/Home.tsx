import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Header from "../components/Header";
import { NavigationProps } from "../type";
import ProductListing from "./ProductListing";

const {height} = Dimensions.get('window');



const Home = () => {
const navigation:any = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity onPress={() => navigation.navigate('ProductListing')}>
        <Text style={styles.textStyles}>Go to Product Listing</Text>  
        </TouchableOpacity>
        {/* <ProductListing /> */}
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: height,
    },
    textStyles: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default Home;