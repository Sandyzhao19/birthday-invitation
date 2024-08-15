import React from 'react'
import './ropaformal.css'
import trajes from '../assets/trajes.png'

const RopaFormal = () => {
  return (
    <div className="vestimenta-container">
      <div className="vestimenta">
        <p>Dress Code</p>
        <img src={trajes} alt="" className="trajes" />
      </div>
    </div>
  )
}

export default RopaFormal