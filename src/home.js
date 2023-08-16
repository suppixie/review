import React, { useState } from 'react';
import GetReview from './productpage';
import './App.css'
import KeywordSearch from './keywordsearch';
import ProductPage from './productpage';
import { Routes, Route, } from 'react-router-dom';


function Home({setLoading}) {
  const [keyword, setKeyword] = useState("");
  // bY STORING IN STATIC VARIBLE API WONT GET CALLED EVERYTIME ON CHNAGE   
  let searchword = '';
  const handleChange = (event) => {
    searchword = event.target.value;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(searchword)
  }

  return (
    <div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>

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
          <form className='search_item' onSubmit={e => handleSubmit(e)}>
            <input className='search_bar' type='text' placeholder='Search for Product'

              required
              onChange={handleChange} />
            <button type='submit'>search</button>
          </form>
        </div>
      </section>

      <h1>Review Website</h1>
      {/* <GetReview/>       */}
      <KeywordSearch searchItem={keyword} setLoading={setLoading} />
    </div>
  );
};

export default Home;
