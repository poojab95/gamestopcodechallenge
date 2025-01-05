import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    ProductListing: undefined;
    ProductDetail: undefined;
    Cart: undefined;
    Checkout: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export interface ProductsProps {
    brand: string;
    category: string;
    name: string;
    image: string;
    isNew: boolean;
    previousPrice: number;
    price: number;
    quantity: number;
    title: string;
    _id: string;
    type: string;
}

export interface Item {
    item: ProductsProps;
}