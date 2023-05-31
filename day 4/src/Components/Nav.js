import React, { useState, useContext } from "react";
import styles from './nav.module.css'
import { NavLink, Link } from 'react-router-dom'
import { conuterContext } from "../ConfigContext/CounterContext";
function Nav() {
    const { count, setCount } = useContext(conuterContext)

    return (
        <>
            <ul>
                <li><NavLink to="header">Home</NavLink></li>
                <li><NavLink to="login">login</NavLink></li>
                <li><NavLink to="form">fromik</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
                <li><NavLink to="counter">counter</NavLink></li>
                <li><NavLink >{count}</NavLink></li>

            </ul>


        </>
    )
}

export default Nav;