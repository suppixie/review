import React,{useState} from 'react';
import GetReview from './productpage';
import './App.css'
import KeywordSearch from './keywordsearch';
import ProductPage from './productpage';


function Home() {
    const [keyword,setKeyword]=useState("");
    console.log(keyword)
    const handleChange = (event) => {
        setKeyword(event.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.assign(`/Search_page?query=${encodeURIComponent(keyword)}`)
    }

    return (
    <div>
      
      <section style={{ backgroundColor: 'pastelgreen' }}>
        <h1>Reviews Simplified</h1>
        <div>
          <form className='search_item' onSubmit={e => handleSubmit(e)}>
              <input className='search_bar' type='text' placeholder='Search for Product'
                  value={keyword}
                  required
                  onChange={handleChange} />
                  <button type='submit'>search</button>
          </form>
        </div>
      </section>
      
      <section>
        <h2>Review by Categories</h2>
        <div className="categories">
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
      
      {/* {keyword ? <KeywordSearch searchItem={keyword} /> : null} */}
    </div>
  );
};

export default Home;
