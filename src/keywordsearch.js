import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './keywordsearch.css';
import { useCookies } from 'react-cookie';

function KeywordSearch(location) {
    const searchItem = new URLSearchParams(location.search).get('query');
    const [products, setProducts] = useState([]);
    const [cookies,setCookie]=useCookies(['product'])

    useEffect(() => {
    axios.get('https://app.scrapingbee.com/api/v1', {
      params: {
        'api_key': 'L0LWPYVDGB5ZITWJPUXPD9BZ2OTNE61FBWVBVHGQOM5DDD02NW8X6KKZEAIX61DE3NHA3QB87ZOUCAV1',
        'url': `https://www.flipkart.com/search?q=${searchItem}`,
        'block_resources': 'false',
      }
    }).then((response) => {
      const htmlContent = response.data;
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      const productElements = doc.querySelectorAll('._1AtVbE');
      const productData = [];


      let count = 0;
      productElements.forEach((element) => {
        if (count < 10) {
          const imageElement = element.querySelector('._4ddWXP img');
          const titleElement = element.querySelector('.s1Q9rs');
          const productLink = element.querySelector('.s1Q9rs');

          if (imageElement && titleElement && productLink) {
            const product = {
              image: imageElement.getAttribute('src'),
              title: titleElement.title,
              link: `https://www.flipkart.com${productLink.getAttribute('href')}`
            };
            productData.push(product);
            count++;
          }
        }
      });

      setProducts(productData);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchItem]);
  const handleProductSelection=(product)=>{
    setCookie('productData',product);
  }

  return (
    <>
    <h3>Search Results for {searchItem}</h3>
    <div className='product_grid'>
        <div className='product_card'>
      {products.map((product, index) => (
        <div className='product_details' key={index}>
          <img onClick={() =>handleProductSelection(product)} src={product.image} alt={product.title} /><br/>
          <p onClick={() =>handleProductSelection(product)}>{product.title}</p>
        </div>
      ))}
      </div>
    </div>
    </>
  );
}

export default KeywordSearch;
