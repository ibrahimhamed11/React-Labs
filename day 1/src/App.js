import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import React from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  var tag = <h1>iti aswan</h1>
  return (
    <>
      <Nav />
      <Header />
      <div className='btn btn-danger'>iti</div>
      <img src={logo} />
    </>

  );
}

export default App;
