import '../src/App.css'
import React from "react"
import Navbar from "../src/Navbar.jsx"
import Home from "../src/Home.jsx"
import About from "../src/About.jsx"
import Card from "../src/Card.jsx"
import Data from "../src/Data.js"
import Reviews from "../src/Reviews.jsx"
import Contacts from "../src/Contacts.jsx"
import Footer from "../src/Footer.jsx"

export default function App() {

const [navbar, setNavbar] = React.useState(false)
  
  React.useEffect(() => {
    window.addEventListener("scroll", () => window.scrollY > 700 ? setNavbar(true) : setNavbar(false))
  }, [window.scrollY])
  
  const cards = Data.map(info => <Card key={info.number} title={info.title} image={info.image} description={info.description} number={info.number} />)
  
  return (
    <main>
      <Navbar black={navbar} />
      <Home />
      <About />
      <div id="Services">
        <h1 className="about--title">Services</h1>
        <hr className="shortened--hr extra--margin" />
        <div className="card--holder">
          {cards}
        </div>
      </div>
      <Reviews />
      <Contacts />
      <Footer />
    </main>
  )
}
