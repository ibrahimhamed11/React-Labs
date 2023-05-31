import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import React from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Components/Card';
import Products from './Pages/Products';

function App() {

  var tag = <h1>iti aswan</h1>
  let data = 10;
  return (
    <>
      <Nav />
      {/* {data ? <h1>hi</h1> : <h1>no</h1>} */}

      <h1 style={{ color: data >= 20 ? 'red' : 'blue' }}>iti aswan</h1>

      {/* <Header /> */}
      <Products />

    </>

  );
}

export default App;
