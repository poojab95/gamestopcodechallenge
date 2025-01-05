import {View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Bars4Icon, ShoppingCartIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation:any = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.openDrawer()}>
                    <Bars4Icon color={'#000'} size={20} fill={'#000'} />
                </Pressable>
                <Pressable style={styles.cartIcon} onPress={() => navigation.navigate('Cart')}>
                    <ShoppingCartIcon size={22}/>
                    <View style={styles.cartCount}> 
                        <Text style={styles.cartText}>0</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBlockColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cartCount: {
        borderRadius: 50,
        backgroundColor: 'black',
        position: 'absolute',
        right: -4,
        top: -6,
        width: 14,
        height: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartIcon: {
        position: 'relative',
    },
    cartText: {
        color: '#fff',
        fontSize: 10,
    },
});

export default Header;