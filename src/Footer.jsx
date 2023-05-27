import './App.css'
import React from 'react'

export default function Footer() {

  function footerOptions() {
      const options = ["Home", "About", "Services", "Reviews", "Contacts"]
      const newOptions = []
      for (let i = 0; i < options.length; i++) {
        newOptions.push(<a key={i} className='footer--option' onClick={() => setDropState(false)} href={`#${options[i]}`} >{options[i]}</a>)
      }
      return newOptions
    }
  
  return(
    <div id="Footer">
      <div className="link--wrapper">
      <div className="quick--links">
        <div className="quick--link--title">Miscellaneous<hr className="shortened--hr" /></div>
        <a target="_blank" href="https://goo.gl/maps/MJvsiV55AbW6NLd58"><div className="footer--option" style={{marginBottom: "20px"}}>5140 W Olive Ave, Glendale, AZ 85302</div></a>
        <a href="tel:623-213-8384"><div className="footer--option" style={{marginBottom: "20px"}}>623-213-8384</div></a>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.4160413972904!2d-112.17313018255615!3d33.56854560000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6b787baa57e7%3A0xbba2b817cf8f9941!2sDancing%20Fingers%20Massage!5e0!3m2!1sen!2sus!4v1678857429440!5m2!1sen!2sus" width="250px" height="200px" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
      <div className="quick--links">
        <div className="quick--link--title navTitle">Quick Links<hr className="shortened--hr" /></div>
        {footerOptions()}
      </div>
        </div>
      <div className="copyright">© 2023 by Dancing Fingers Massage. Built proudly by Daniel Wang.</div>
    </div>
  )
}