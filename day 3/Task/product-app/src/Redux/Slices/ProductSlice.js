import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// getAllProducts => action sync or async

export const getAllProducts = createAsyncThunk("product/getProducts", async () => {
    try {
        let res = await axios.get('https://dummyjson.com/products');
        // console.log(data);
        return res.data.products;

    }
    catch (err) {
        console.log(err)

    }

})
export const addProduct = createAsyncThunk("product/getProducts", async (payload) => {
    try {
        let res = await axios.post('https://dummyjson.com/products', payload);
        // console.log(data);
        return res.data.products;

    }
    catch (err) {
        console.log(err)

    }

})
const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
    },
    reducers: {
        addToCart: (state, action) => {
            // here write logic for action 
            // console.log(action.payload)
            state.products.push(action.payload); // 
        },

    },
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            console.log("pending");


        },
        [getAllProducts.fulfilled]: (state, action) => {
            console.log("fulfilled")
            console.log(action.payload);
            state.products = action.payload;
        },
        [getAllProducts.rejected]: (state, action) => {
            // console.log(action);
            console.log("rejected")
        }

    }
})


export const { addToCart } = productSlice.actions;
export default productSlice.reducer;

