
import './App.css';
import Login from './pages/Login';
import Nav from './componants/Nav/Nav'
import ProductList from './componants/productList/productList';
import RegistrationForm from './componants/Forms/RegistrationForm'
import { Route, Routes } from 'react-router-dom';

import React, { useState } from 'react';
import { Dark } from './configcontext/Darkcontext';


function App() {

  const [dark, setDark] = useState("dark");
  return (


<>
<Dark.Provider value={{ dark, setDark }}>

<Routes>
<Route index path='login' element={<Login/>}/>

<Route path='RegistrationForm' element={<RegistrationForm />}/>

<Route path='ProductList' element={<ProductList />}/>




</Routes>

</Dark.Provider>

</>


  );
}

export default App;
