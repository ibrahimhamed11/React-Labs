import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Slices/ProductSlice';

export const Store = configureStore({
    reducer: {
        ProductSlice,

    }
}); // 