import { ProductsProps } from "../type"
import { createSlice } from '@reduxjs/toolkit';

interface StoreState  {
    productData: ProductsProps[]
}
const initialState: StoreState = {
    productData: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    addToCart: (state, action) => {
        const { _id, quantity, selectedVariation } = action.payload;
    
        // Check if a product with the same ID and variation already exists in the cart
        const existingProduct = state.productData.find(
          (item: ProductsProps) => item._id === _id && item.selectedVariation === selectedVariation
        );
    
        console.log(existingProduct, 'existingProduct');
        console.log(action.payload, 'action.payload');
        if (existingProduct) {
          // If it exists, increase the quantity
          existingProduct.quantity += quantity;
        } else {
          // Add the product with a `selectedVariation` property to the cart
          state.productData.push({
            ...action.payload,
            selectedVariation, 
            quantity,      
          });
        }
      },
    
    increaseQuantity: (state, action) => {
        const { _id, selectedVariation } = action.payload;
        const existingProduct = state.productData.find((item: ProductsProps) => item._id === _id && item.selectedVariation === selectedVariation)
        if(existingProduct){
            existingProduct.quantity += 1;
        }
    },

    decreaseQuantity: (state, action) => {
        const { _id, selectedVariation } = action.payload;
        const existingProduct = state.productData.find((item: ProductsProps) => item._id === _id && item.selectedVariation === selectedVariation)
        if (existingProduct) {
            if (existingProduct.quantity > 1) {
              existingProduct.quantity -= 1;
            } else {
              // Optionally, you can automatically remove the item if quantity becomes 0
              state.productData = state.productData.filter(
                (item) =>
                  !(item._id === _id && item.selectedVariation === selectedVariation)
              );
            }
          }
    },

    removeFromCart: (state, action) => {
        const { _id, selectedVariation } = action.payload;
        state.productData = state.productData.filter((item: ProductsProps) => item._id !== _id || item.selectedVariation !== selectedVariation);
    },

    clearCart: (state) => {
        state.productData = [];
    },

},
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = productSlice.actions;

export default productSlice.reducer;