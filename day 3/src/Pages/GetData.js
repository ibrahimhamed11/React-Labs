import axios from 'axios';
import React, { useEffect } from 'react'
function GetData() {

    useEffect(function () {
        // after init component 
        console.log("iti aswan");
        axios.get('https://dummyjson.com/products').then(res => {
            console.log(res);
        })
        // destroy dead component
        // return ()=>
        // {

        // }
    }, [])
    return (
        <div>GetData</div>
    )
}

export default GetData