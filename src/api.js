import axios from 'axios';
import { useEffect, useState } from 'react';

function GetReview(){
  const [review,setReview]=useState("");
  axios.get('https://app.scrapingbee.com/api/v1', {
    params: {
        'api_key': 'ONFIN9MU4E2I97OPEMNQA01X5369QBWIUQPJ1LYSHH8OFCLK2WA1ZJ0KHFW76BNIMK1EB05AR9CYAWSI',
        'url': 'https://www.myntra.com/23720488', 
        'screenshot': 'true',
        'block_resources': 'false',
    } 
}).then(function (response) {
    setReview(response.data)
    console.log(response.data);
})
return(
  <>
  <p>{review}</p></>
)}
export default GetReview;
