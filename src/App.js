import './App.css';
import React from 'react';
// import Navbar from './navbar';
import Home from './home'
import { Routes, Route, } from 'react-router-dom';
import ProductPage from './productpage';
import KeywordSearch from './keywordsearch';


const App = () => {

  return (
    <div className="App">
      <div><h1>Reviewee</h1></div>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Search_page' element={<KeywordSearch/>}></Route>
      <Route path='/Search_page/Product_page' element={<ProductPage />}></Route>
      </Routes>
      </div>
  )
};

export default App;