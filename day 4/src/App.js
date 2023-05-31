import React, { useState } from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Formik from './Pages/Formik';
import Auth from './Components/Auth';
import About from './Components/About';
import { conuterContext } from './ConfigContext/CounterContext';
import Counter from './Components/Counter';
function App() {
  const [count, setCount] = useState(0);
  return (
    <conuterContext.Provider value={{ count, setCount }}>
      <Nav></Nav>
      <Routes>
        <Route index path='header' element={<Header />} />
        <Route index path='counter' element={<Counter />} />
        <Route path='login' element={<Login />} />
        <Route element={<Auth />}>
          <Route path='form' element={<Formik />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>






    </conuterContext.Provider>

  );
}

export default App;
