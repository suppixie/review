import axios from 'axios';
import { useEffect, useState } from 'react';


function ProductPage(){
  const [review,setReview]=useState("");
  useEffect(()=>{
        axios.get('https://app.scrapingbee.com/api/v1', {
          params: {
              'api_key': 'ONFIN9MU4E2I97OPEMNQA01X5369QBWIUQPJ1LYSHH8OFCLK2WA1ZJ0KHFW76BNIMK1EB05AR9CYAWSI',
              'url': 'https://www.myntra.com/23720488', 
              // 'screenshot': 'true',
              'block_resources': 'false',
          } 
}).then( (response)=> {
  const htmlContent = response.data;
  console.log(response.data)
        
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const reviewElements = doc.querySelectorAll('.user-review-footer');
  // const reviewContent = Array.from(reviewElements).map(element => element.textContent).join('\n');
  
  setReview(reviewElements);
  console.log(reviewElements);
})},[])


return(
  <>
  <p>{review}</p></>
)}
export default ProductPage;
