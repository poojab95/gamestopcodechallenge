import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import  productSlice  from "./productSlice";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: 0
}


const persistedReducer = persistReducer(persistConfig, productSlice);

export const store = configureStore({
    reducer: {
       products : persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export const persistor = persistStore(store);

export const getDispatch = () => store.dispatch;
