import React from "react"
import "./App.css"
import Data from "../src/ReviewData.js"
import ReviewComp from "../src/ReviewComp.jsx"

export default function Reviews() {
  const [index, setIndex] = React.useState(0)
  const reviews = Data.map(info => index == info.index && <ReviewComp key={info.index} name={info.name} review={info.review} visible={index == info.index} />)

  function next(){
    setIndex(prevIndex => prevIndex == reviews.length-1 ? 0 : prevIndex + 1)
  }
  
  React.useEffect(() => {
    const interval = setInterval(() => next(), 10000)
    return () => clearInterval(interval)
  }, [index])
  
  
  function back(){
    setIndex(prevIndex => prevIndex == 0 ? reviews.length-1 : prevIndex - 1)
  }
  return(
    <div id="Reviews">
      
    <div className="about--title mobile--response">Feedback from Clients</div>
      <hr className="shortened--hr" />
      <div className="mainReviewContent">
        <i className="fa fa-arrow-left" onClick={back} aria-hidden="true"></i>
        <div className="fade-in">{reviews}</div>
        <i className="fa fa-arrow-right" onClick={next} aria-hidden="true"></i>
      </div>
      <div className="review--links"><div style={{color: "white", fontSize: "25px", marginBottom: "10px"}}>See More On</div><div className="review--images"><a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TCuuzMuqMkgyYLRSNaiwMDdKMksytzBPSkw0NU81tzKoSEpKNEqyMDRPTrNIs7Q0MfQST0nMS87MS1dIAxKpRcUKuYnFxYnpqQCtDBjX&q=dancing+fingers+massage&rlz=1C1UEAD_enUS948US948&oq=dancing+fingers+massage&aqs=chrome.1.69i57j46i175i199i512j35i39j46i175i199i512l2j69i60l3.4027j0j4&sourceid=chrome&ie=UTF-8#lrd=0x872b6b787baa57e7:0xbba2b817cf8f9941,1,,,," target="_blank"><img className="shadow" src="img/google.png" height="50px" width="50px" /></a><a href="https://www.yelp.com/biz/dancing-fingers-massage-glendale-2" target="_blank"><img src="img/yelp.png" className="shadow" height="50px" width="50px" /></a></div></div>
    </div>
  )
}