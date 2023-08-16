import React, { useEffect, useState } from 'react';
import axios from 'axios';

function KeywordSearch(searchItem) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://app.scrapingbee.com/api/v1', {
      params: {
        'api_key': 'ONFIN9MU4E2I97OPEMNQA01X5369QBWIUQPJ1LYSHH8OFCLK2WA1ZJ0KHFW76BNIMK1EB05AR9CYAWSI',
        'url': `https://www.flipkart.com/search?q=${searchItem.searchItem}`,
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
            console.log(product)
            productData.push(product);
            count++;
          }
        }
      });
      setProducts(productData);
    });
  }, [searchItem]);
  console.log(products);
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <img src={product.image} alt={product.title} />
          <a target="_blank" href={product.link}>{product.title}</a>
        </div>
      ))}
    </div>
  );
}

export default KeywordSearch;
