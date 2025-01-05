import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const BannerVariation = ({customStyle, title}:any) => {
  return (
   <View style={[styles.container,customStyle]}>
    <Text style={styles.text}>
         {title}
    </Text>
   </View>
  )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right:2,
        top: 2,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 2,
    },
    text:{
        color: '#fff',
        fontSize: 12,
    }
});

export default BannerVariation;