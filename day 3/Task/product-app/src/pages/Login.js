import React, { useState } from 'react'
import style from './log.module.css'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'



function Login() {
  const nav = useNavigate();
  const loc = useLocation();
  const formik = useFormik({
    initialValues:
    {
      username: '',
      password: '',
      img: null
    },
    onSubmit: (values) => {
      console.log(values);
      let form = new FormData();
      form.append('username', values.username)
      form.append('password', values.password)
      // form.append('password', values.password)
      // form.append('password', values.password)
      // form.append('password', values.password)
      form.append('img', values.img);
      axios.post('http://localhost:5000/addimg', form).then(res => {
        console.log(res);
      })

    }
  })


  // function goTo(e) {
  //   e.preventDefault()
  //   // backend return status 200 400 
  //   localStorage.setItem('flag', "ok");
  //   if (loc.state) {
  //     nav(loc.state)
  //   }
  //   else
  //     nav('/header', { state: { name: "sayed" } });


  // }

  return (
    <div>
      <div className={style["background"]}>
        <div className={style["shape"]} />
        <div className={style["shape"]} />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" name="username" onChange={formik.handleChange} />
        <small style={{ color: 'red' }} >{ }</small>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" name="password" onChange={formik.handleChange} />
        <input type="file" name='img' onChange={(e) => {
          formik.setFieldValue('img', e.currentTarget.files[0])
        }} />

        <button >Log In</button>

      </form>
    </div>

  )
}

export default Login