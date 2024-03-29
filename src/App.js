import './App.css';
import React, { useState } from 'react';
// import Navbar from './navbar';
import Home from './home'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductPage from './productpage';
import KeywordSearch from './keywordsearch';
import axios from "./apis/base";
import Loader from './Loader';


const App = () => {
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <Loader state={loading} />
      <BrowserRouter>
        <nav>
        <h2 ><a href='/'>Reviewee</a></h2>
        </nav>
        <Routes>
          <Route path='/' element={<Home setLoading={setLoading} />}></Route>
          <Route path='/Search_page' element={<KeywordSearch setLoading={setLoading} />}></Route>
          <Route path='/Product' element={<ProductPage setLoading={setLoading} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;