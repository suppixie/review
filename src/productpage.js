import base from "./apis/base"
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

// Classname Mappings
// B_NuCI - prod name
// _3LWZlK - star
// _30jeq3 _16Jk6d - price on flipkart
// _3I9_wc _2p6lqe - mrp
// _1mXcCf - Description
// _6K-7Co - Reviews on prod page
// _3UAT2v _16PBlm - Allrevies div

function ProductPage({setLoading}) {
  const [basicDetails, setBasicDetails] = useState({ "rating": "", "description": "", "mrp": "","priceOnFlipkart":""});
  const [searchParams] = useSearchParams();
  var link = searchParams.get("link");
  var title = searchParams.get("title");
  var imageUrl = searchParams.get("imageurl");
  const [review, setReview] = useState([]);

  useEffect(() => {
    setLoading(true)
    base.get('https://app.scrapingbee.com/api/v1', {
      params: {
        'api_key': 'L0LWPYVDGB5ZITWJPUXPD9BZ2OTNE61FBWVBVHGQOM5DDD02NW8X6KKZEAIX61DE3NHA3QB87ZOUCAV1',
        'url': link,
        'block_resources': 'false',
      }
    }).then((response) => {
      var localReview=[]
      const htmlContent = response.data;
      
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      setBasicDetails({ ...basicDetails, "rating": doc.querySelector('._3LWZlK').innerHTML
      ,"priceOnFlipkart": doc.querySelector('._30jeq3').innerHTML
      ,"mrp": doc.querySelector('._3I9_wc').innerHTML
      ,"description": doc.querySelector('._1mXcCf').innerHTML });
      const reviewElements = doc.querySelectorAll('._6K-7Co');
      // const reviewContent = Array.from(reviewElements).map(element => element.textContent).join('\n');
      reviewElements.forEach(reviewElement => {
        localReview.push(reviewElement.innerHTML);
      })
      setReview(localReview);
      console.log(basicDetails);
      setLoading(false)
    })
  }, [link])


  return (
    <>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      <div>
        <h3>Description:</h3>
        <div dangerouslySetInnerHTML={{ __html: basicDetails.description}}></div>
      </div>
      <div>
        <h3>Rating:</h3>
        {basicDetails.rating.slice(0,3)}
      </div>
      <div>
        <h3>MRP:</h3>
        {basicDetails.mrp}
      </div>
      <div>
        <h3>Price on Flipkart:</h3>
        {basicDetails.priceOnFlipkart}
      </div>
      <div>
        <h3>Reviews:</h3>
        {review.map((review) => {
          return <p>{review}</p>
        })}
      </div>
    </>
  )
}
export default ProductPage;
