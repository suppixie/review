import base from "./apis/base"
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import Summarize from "./summarize";
import './productpage.css'

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
  const [paragraph,setParagraph]=useState('')

  useEffect(() => {
    setLoading(true)
    base.get('https://app.scrapingbee.com/api/v1', {
      params: {
        'api_key': 'BYZCNNS0SOZCPC4EXD5SXSH0PWAXPWFMZ4SXVEQNEDMKSGBP57K31PJ44V46344XCYN7IARKQWLS0V4X',
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
      const reviewElements = doc.querySelectorAll('.t-ZTKy');
      // const reviewContent = Array.from(reviewElements).map(element => element.textContent).join('\n');
      reviewElements.forEach(reviewElement => {
        localReview.push(reviewElement.innerHTML);
      })
      setReview(localReview);
      console.log(basicDetails);
      setLoading(false)
    })
  }, [link])
  useEffect(() => {
    const combinedReviews = review.map(r => r.replace('READ MORE', '')).join(' ');
    setParagraph(combinedReviews);
  }, [review]);

  return (
    <>
    <hr/>
    <div className="product_page">
        <div className="leftside_details">
              <div className="image">
                    <img src={imageUrl} alt={title} />
              </div>
              <div className="simple_review">
                  <h3>Simple Review</h3>
                  <Summarize text={paragraph} />      
              </div>
              <a href={link} >Go to Source Page</a>
        </div>

        <div className="rightside_details">
             <h2>{title}</h2>

            <div className="prices">
                <h3>{basicDetails.priceOnFlipkart}   <span> 
                {basicDetails.mrp}</span></h3>
                <h3>Rating:</h3>
                {basicDetails.rating.slice(0,3)}
            </div>

            <div>
                <h3>Description:</h3>
                <p><div dangerouslySetInnerHTML={{ __html: basicDetails.description}}></div></p>
            </div>
        </div>
      </div>
     
      
    </>
  )
}
export default ProductPage;
