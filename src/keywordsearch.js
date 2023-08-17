import React, { useEffect, useState } from 'react';
import base from './apis/base';
import { Link, useLocation } from 'react-router-dom';
import './keywordsearch.css'

function KeywordSearch({setLoading}) {
    const location=useLocation();
    const searchItem = new URLSearchParams(location.search).get('query');
    console.log(searchItem);
    const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true)
    base.get('https://app.scrapingbee.com/api/v1', {
      params: {
        'api_key': 'BYZCNNS0SOZCPC4EXD5SXSH0PWAXPWFMZ4SXVEQNEDMKSGBP57K31PJ44V46344XCYN7IARKQWLS0V4X',
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
      setLoading(false);
    });
  }, [searchItem]);

  const handleClick = (product) => {
    console.log(product);
    window.location.assign(`/Product?link=${product.link}&imageurl=${product.image}&title=${product.title}`);
  }
  return (
    <>
    <hr/>
    <h3>Search Results for {searchItem}</h3>
    <div className='product_grid'>
        <div className='product_card'>
      {products.map((product, index) => (
        <div className='product_details' key={index}>
            <img onClick={e=>handleClick(product)} src={product.image} alt={product.title} />
          <a target="_blank" href={product.link}>{product.title}</a>
        </div>
      ))}
      </div>
    </div>
    </>
  );
}

export default KeywordSearch;
