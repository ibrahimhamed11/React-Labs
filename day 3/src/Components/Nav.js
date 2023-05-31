import React, { useState } from "react";
// import  './nav.css'
function Nav() {
    let [name, setName] = useState('user');

    return (
        <>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                <li> <a href="#">{name}</a></li>
            </ul>
            {/* <button onClick={() => setName('negm')}>log</button> */}

        </>
    )
}

export default Nav;