import './App.css';
import React from 'react';
// import Navbar from './navbar';
import Home from './home'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductPage from './productpage';
import KeywordSearch from './keywordsearch';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Search_page' element={<KeywordSearch />}></Route>
          <Route path='/Product' element={<ProductPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;