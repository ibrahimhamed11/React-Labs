import React, { useContext, useEffect } from 'react'
import { conuterContext } from '../ConfigContext/CounterContext'
import { useDispatch } from 'react-redux'
import { addProduct, addToCart, getAllProducts } from '../Redux/Slices/ProductSlice';
function Counter() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts()); // fire action 
    }, [])


    return (
        <button onClick={() => {
            dispatch(addToCart(30))
            dispatch(addProduct({ name: 'value' }))
        }}>Counter</button>
    )
}

export default Counter