import React, { useState } from 'react';
import './home.css';



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
          <form className='search_item' onSubmit={e =>handleSubmit(e)}>
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
          <button onClick={(e) => {e.preventDefault();setKeyword("Furniture");handleSubmit(e);}}>Furniture</button>
          <button onClick={(e) => {e.preventDefault();setKeyword("Clohing");handleSubmit(e);}}>Clothing</button>            
          <button onClick={(e) => {e.preventDefault();setKeyword("Home Appliances");handleSubmit(e);}}>Home Appliances</button>
          <button onClick={(e) => {e.preventDefault();setKeyword("Electronics");handleSubmit(e);}}>Electronics</button>
          <button onClick={(e) => {e.preventDefault();setKeyword("Footwear");handleSubmit(e);}}>Footwear</button>

          </div>
      </section>

     

    </div>
  );
};

export default Home;