import React, { useEffect, useState } from 'react';
import base from './apis/base';

function KeywordSearch({ searchItem, setLoading }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true)
    console.log(searchItem)
    base.get('https://app.scrapingbee.com/api/v1', {
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
      setLoading(false);
    });
  }, [searchItem]);

  const handleClick = (product) => {
    console.log(product);
    window.location.assign(`/Product?link=${product.link}&imageurl=${product.image}&title=${product.title}`);
  }
  return (
    <>
    <h3>Search Results for {searchItem}</h3>
    <div className='product_grid'>
        <div className='product_card'>
      {products.map((product, index) => (
        <div key={index}>
          <button onClick={e=>handleClick(product)}>
            <img src={product.image} alt={product.title} />
          </button>
          <a target="_blank" href={product.link}>{product.title}</a>
        </div>
      ))}
      </div>
    </div>
    </>
  );
}

export default KeywordSearch;
