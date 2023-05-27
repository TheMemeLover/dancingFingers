import './App.css'
import React from 'react'

export default function Card(props) {
  
  const modal = document.querySelector(`.modal${props.number}`);
  let descriptionPreview = props.description.split(".")[0]

  function open(){
    modal.showModal()
  }
  
  function close(){
    modal.close()
  }
  
  return (
    <div className="flip--container service--card">
      <div className="info--wrapper card--wrapper">
        <div className="front service--front">
          <h1 className="title">{props.title}</h1>
          <img src={`../img/${props.image}`} className="service--image" />
        </div>
        <div className="back service--back">
          <h2 className="description">{descriptionPreview}</h2>
          <button className="openModal" onClick={open}><span>Read More</span></button>
        </div>
      </div>
      
        {/* Modal */}
      <dialog className={`modal modal${props.number}`} id="modal">
        <div className="modalHeader">
        <span className="modal--title">{props.title}</span>
        <button className="closeModal" onClick={close}>x</button>
          </div>
        <hr style={{margin: "15px -16px 15px"}} />
        <div style={{fontSize: "25px"}}>{props.description}</div>
      </dialog>
      
    </div>
  )
}
