import logo from './logo.svg';
import styles from './App.module.css';
import Nav from './Components/Nav';
import React from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Components/Card';
import Products from './Pages/Products';
import Form from './Pages/Form';
import Todo from './Pages/Todo';
import Formik from './Pages/Formik';
import GetData from './Pages/GetData';
function App() {

  var tag = <h1>iti aswan</h1>
  let data = 10;
  return (
    <>
      {/* <Formik /> */}
      <GetData />

      {/* <h2 className={styles.err}>iti aswan</h2> */}
      {/* {data ? <h1>hi</h1> : <h1>no</h1>} */}

      {/* <h1 style={{ color: data >= 20 ? 'red' : 'blue' }}>iti aswan</h1> */}

      {/* <Header /> */}
      {/* <Products /> */}
      {/* <Form /> */}

    </>

  );
}

export default App;
