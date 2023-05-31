import React, { useState, useContext } from "react";
import styles from './nav.module.css'
import { NavLink, Link } from 'react-router-dom'
import { conuterContext } from "../ConfigContext/CounterContext";
import { useSelector } from "react-redux";
function Nav() {
    const { products } = useSelector(state => state.ProductSlice) // select data from store or form big state 
    console.log(products);
    return (
        <>
            <ul>
                <li><NavLink to="header">Home</NavLink></li>
                <li><NavLink to="login">login</NavLink></li>
                <li><NavLink to="form">fromik</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
                <li><NavLink to="counter">counter</NavLink></li>
                <li><NavLink >{products.length}</NavLink></li>

            </ul>


        </>
    )
}

export default Nav;