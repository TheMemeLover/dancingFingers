import './App.css'
import React from 'react'

export default function About() {
  
  function play(){
    document.querySelector("video").play()
  }
  
  return (
  <div id="About">
    <h1 className="about--title">About Us<hr className="shortened--hr" /></h1>
    <div className="computer--info--wrapper">
    <div className="computer">
    <video  height="362px" width="540px" className="vid" controls>
          <source src="https://video.wixstatic.com/video/9ecdb4_171f17e5acef41b2a41c4a90eda6e710/1080p/mp4/file.mp4" type="video/mp4" />
          </video>
      </div>
    <div className="flip--container" >
    <div className="info--wrapper info--height">
      <div className="front new_front">
    <h2 id="about--dancing--title">Dancing Fingers Massage<hr className="shortened--hr" /></h2>
    <h3 className="about--statement">Sore arms, and a stiff back? No worries, we'll fix that. At Dancing Fingers, we provide high quality hand massage services. In addition, we use the best techniques and products to give YOU the best experience. Whether you're looking for a quick refresher or a full-body relaxation session, we can help. Give us a call now!</h3>
        <span className="device comp">Hover</span>
        <span className="device phone">Tap</span>
    </div>
      <div className="back new_back">
        <h2>Address<hr className="shortened--hr" /><span className="normal">5140 W Olive Ave, Glendale, AZ 85302</span></h2>
        <h2>Phone<hr className="shortened--hr" /><span className="normal">623-213-8384</span></h2>
        <h2>Hours<hr className="shortened--hr" /><span className="normal">Mon-Sat 10:00am-9:00pm <br />Sun 11:00pm-8:00pm</span></h2>
        <a href="#About"><button className="play" onClick={play}><img src="img/play.png" height="25px" width="25px" />Watch Video</button></a>
      </div>
        
    </div>
      </div>
      </div>
        </div>
    
    )
}