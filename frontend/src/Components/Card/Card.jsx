import React, { useState ,useEffect} from 'react'
import './Card.css'

const Card = (props) => {
  const setCardopen = props.setCardopen;

  const handlecancel = () => {
    const temp = {
      grade : null,
      inferance_time : null
    }
    props.setPredict(temp);
    props.setPreviewUrl(null);
    setCardopen(false)
  }
  return (
    <div className="card">
      <div className="card-cross" onClick={handlecancel}>
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
      <div className="card-container">
        <img src={props.previewUrl} alt="" />
        <h3>Grade : {props.predict.grade}</h3>
        <h4>Inference Time : {props.predict.inferance_time} s</h4>
      </div>
    </div>
  )
}

export default Card