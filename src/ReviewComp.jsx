import React from "react"
import "./App.css"

export default function ReviewComp(props) {
  
  return(
    <div className={`review--comp ${props.visible && "fade-in"}`}>
      <h1 className="review--name">{props.name}</h1>
      <div className="review--feedback">{props.review}</div>
    </div>
    )
}