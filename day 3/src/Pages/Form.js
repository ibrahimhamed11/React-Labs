import React, { useState } from 'react'
import styles from './form.module.css'
function Form() {

    const [user, setUser] = useState({ name: '', email: '' });
    const [err, setErr] = useState({ name: '', email: '' });
    function changeData(e) {
        console.log(e.target.name)
        if (e.target.name == "user") {
            // user.name = e.target.value;
            // setUser(user); // rerender 
            if (e.target.value.length < 5) {
                setErr({ ...err, name: 'must be 5 char' })
            }
            else {
                setErr({ ...err, name: '' })
            }
            setUser({ ...user, name: e.target.value }) // name:new data // over object be string
        }
        else {
            setUser({ ...user, email: e.target.value })
        }
    }
    return (
        <div>

            <input type="text" name="user" placeholder="enter name" onChange={changeData} />
            <br />
            {/* {err.name && <small style={{ color: 'red' }}>{err.name}</small>} */}
            {err.name ? <small style={{ color: 'red' }}>{err.name}</small> : null}
            <br />
            <input type="text" name="email" placeholder="enter email" onChange={changeData} />

            <h1 className={styles.err}>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}

export default Form