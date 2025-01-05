import { ProductsProps } from "../type"
import { createSlice } from '@reduxjs/toolkit';

interface StoreState  {
    productData: ProductsProps[]
}
const initialState: StoreState = {
    productData: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart : (state, action) => {
            const existingProduct = state.productData.find(product => product._id === action.payload._id);
            if(existingProduct){
                existingProduct.quantity += action.payload.quantity;
        }else {
            state.productData.push(action.payload);
        }
    },

    increaseQuantity: (state, action) => {
        const existingProduct = state.productData.find(product => product._id === action.payload);
        if(existingProduct){
            existingProduct.quantity += 1;
        }
    },

    decreaseQuantity: (state, action) => {
        const existingProduct = state.productData.find(product => product._id === action.payload);
        if(existingProduct?.quantity== 1){
            existingProduct.quantity = 1;
        }else {
          existingProduct && existingProduct.quantity--;
        }
    },

    removeFromCart: (state, action) => {
        state.productData = state.productData.filter(product => product._id !== action.payload);
    },

    clearCart: (state) => {
        state.productData = [];
    },

},
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = productSlice.actions;

export default productSlice.reducer;