import React, { useState } from 'react'


function Header() {
    // here logic
    // any useState have to item 0 is var and 1 fuction
    let [user, setUser] = useState({ name: "ali", age: 20 });
    let [count, setCount] = useState(0);
    const [arr, setArr] = useState([10, 20, 30]);
    console.log(user);

    // var user = "iti";
    function save() {
        // console.log("first")
        //user = "kero"; // in memory 
        // console.log(user);
        let newobj = { ...user, name: 'kero', address: 'aswan' }
        setUser(newobj); // change in memory and make rerender with new value 
        setCount(count + 1);

        // arr.push(40)

        setArr([...arr, 40]);


    }
    return (
        // here ui render
        <>
            <div style={{ color: "red", padding: 10 }}>{user.age}</div>
            <div style={{ color: "red", padding: 10 }}>{user.name}</div>
            <div> {user.address}</div>
            <div style={{ color: "red", padding: 10 }}>{arr}</div>
            <button onClick={save}>save</button>
        </>
    )
}

export default Header