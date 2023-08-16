import React, { useState } from 'react';
import GetReview from './productpage';
import './App.css'
import KeywordSearch from './keywordsearch';
import ProductPage from './productpage';
import { Routes, Route, } from 'react-router-dom';


function Home() {
  const [keyword, setKeyword] = useState("");
  console.log(keyword);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.assign(`/Search_page?query=${encodeURIComponent(keyword)}`)
  }
  const show=false;
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          {/* <li><a href="#">Categories</a></li>
          <li><a href="#">Contact Us</a></li> */}
        </ul>
      </nav>
      <hr/>

      <section style={{ backgroundColor: 'pastelgreen' }}>
        <h1>Reviews Simplified</h1>
      </section>

      <section>
        <h2>Review by Categories</h2>
        <div className="category-grid">
          <div className="category-item">
            <img src="category1.jpg" alt="Category 1" />
            <h3>Category 1</h3>
          </div>
          <div className="category-item">
            <img src="category2.jpg" alt="Category 2" />
            <h3>Category 2</h3>
          </div>
        </div>
      </section>

      <section>
        <div>
          <form className='search_item' onSubmit={handleSubmit}>
            <input className='search_bar' type='text' placeholder='Search for Product'

              required
              onChange={(e) => setKeyword(e.target.value)}></input>
            <button type='submit'>search</button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;