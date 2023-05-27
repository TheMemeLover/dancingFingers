import './App.css'
import React from "react"

export default function Navbar(props) {

  const [dropState, setDropState] = React.useState(false)
  
  const backgroundCheck = {
    backgroundColor: props.black && "#212121",
    boxShadow: props.black && "0 5px 10px black"
  }
  
  const dropStyle = {
    listStyleType: "none",
    transition: dropState ? "transform .5s ease-out, visibility 0s" : "transform .5s ease-out, visibility .5s",
    visibility: dropState ? "visible" : "hidden",
    transform: dropState ? "translateX(-50%)" : "translateX(100%)"
  }
  
  function headerOptions() {
    const options = ["Home", "About", "Services", "Reviews", "Contacts"]
    const newOptions = []
    for (let i = 0; i < options.length; i++) {
      newOptions.push(<a key={i} className={'option'} onClick={() => setDropState(false)} href={`#${options[i]}`} >{options[i]}</a>)
    }
    return newOptions
  }

  function dropdown() {
    setDropState(prevState => !prevState)
  }
  
  return (
    <main id="navbar" style={backgroundCheck}>
      <h1 id="title"><a href="#Home" style={{listStyleType: "none", color: "white"}}>Dancing Fingers</a></h1>
      <div>
      <img src="img/hamburger.png" className="burger" height="50px" onClick={dropdown} />
      <ul style={dropStyle} className="dropList">
        {headerOptions()}
      </ul>
        </div>
      <div id="navbar--wrapper">
        {headerOptions()}
        </div>
      
    </main>
  )
}
