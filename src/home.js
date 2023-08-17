import React, { useState } from 'react';
import './home.css';



function Home() {
  const [keyword, setKeyword] = useState("");
  const [category,setCategory]=useState("");
  console.log(keyword);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.assign(`/Search_page?query=${encodeURIComponent(keyword)}`)
  }
  const handleClick=()=>{
    window.location.assign(`/Search_page?category=${encodeURIComponent(category)}`)
  }
  const show=false;
  return (
    <div className='homepage'> 
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
          <button onClick={(e) => {handleClick("Furniture");}}>Furniture</button>
          <button onClick={(e) => {handleClick("Clohing");}}>Clothing</button>            
          <button onClick={(e) => {handleClick("Home Appliances");}}>Home Appliances</button>
          <button onClick={(e) => {handleClick("Electronics");}}>Electronics</button>
          <button onClick={(e) => {handleClick("Footwear");}}>Footwear</button>

          </div>
      </section>

     

    </div>
  );
};

export default Home;