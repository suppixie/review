import React, { useState } from 'react';
import './home.css';



function Home() {
  const [keyword, setKeyword] = useState("");
  console.log(keyword);
 
  const handleSubmit = (e) => {
    // e.preventDefault();
    window.location.assign(`/Search_page?query=${encodeURIComponent(keyword)}`)
  }
  const show=false;
  return (
    <div>
      {/* <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav> */}
      <hr/>

      <section className='landing_page'>
        <h1>Reviews Simplified</h1>
        <div>
          <form className='search_item' onSubmit={handleSubmit}>
            <input className='search_bar' type='text' placeholder='Search for Product'

              required
              onChange={(e) => setKeyword(e.target.value)}></input>
            <button type='submit'>search</button>
          </form>
        </div>
      </section>

      <section>
        <h2>Review by Categories</h2>
        <div className="category_grid">
          <button onClick={(e) => {e.preventDefault();setKeyword("Furniture");handleSubmit();}}>Furniture</button>
          <button onClick={(e) => {e.preventDefault();setKeyword("Clohing");handleSubmit();}}>Clothing</button>            
          <button onClick={(e) => {e.preventDefault();setKeyword("Home Appliances");handleSubmit();}}>Home Appliances</button>
          <button onClick={(e) => {e.preventDefault();setKeyword("Electronics");handleSubmit();}}>Electronics</button>
          <button onClick={(e) => {e.preventDefault();setKeyword("Footwear");handleSubmit();}}>Footwear</button>

          </div>
      </section>

     

    </div>
  );
};

export default Home;