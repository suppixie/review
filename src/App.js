import React, { useEffect, useState } from 'react';
import GetReview from './api';
import './App.css'

const App = () => {

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
          {/* Add similar code for the remaining 4 categories */}
        </div>
      </section>
      
      <section>
        <h2>Random Products with Ratings</h2>
        <div className="random-products">
          <div className="product-item">
            <img src="product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>Rating: 4.5</p>
          </div>
          <div className="product-item">
            <img src="product2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>Rating: 3.8</p>
          </div>
          {/* Add similar code for the remaining 3 products */}
        </div>
      </section>
      
      <h1>Review Website</h1>
      <GetReview/>      
    </div>
  );
};

export default App;
