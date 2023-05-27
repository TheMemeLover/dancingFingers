import './App.css'
import React from 'react'

export default function Contacts() {

  return(
    <div id="Contacts">
      <h1 className="about--title">Contact Us</h1>
      <hr className="shortened--hr" />
      <div className="contact--wrapper">
        <div className="type--wrapper">
          <div><span className="contact--type">Phone</span><span className="contact--info">623-213-8384</span></div>
          <div><span className="contact--type">Address</span><span className="contact--info">5140 W Olive Ave, Glendale, AZ 85302</span></div>
          <div><span className="contact--type">Hours</span><span className="contact--info">Mon-Sat 10am-9pm | Sunday 11pm-8pm</span></div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.4160413972904!2d-112.17313018255615!3d33.56854560000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6b787baa57e7%3A0xbba2b817cf8f9941!2sDancing%20Fingers%20Massage!5e0!3m2!1sen!2sus!4v1678857429440!5m2!1sen!2sus" width="400px" height="300px" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="payment"><div>We Accept the Following:</div><div id="paymentImages"><img src="img/visa.png" /><img src="img/discover.png" /><img src="img/amex.png" /><img src="img/mastercard.png" /></div></div>
    </div>
  )
}