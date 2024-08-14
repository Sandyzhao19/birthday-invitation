import React from 'react'
import Clock from './Clock'
import './homeScreen.css'
import logo from '../assets/mis15.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


const HomeScreen = () => {

  return (
    <div className="homeScreen">
      <div className="logo-mis-15">
        <img className="logo" src={logo} alt="" />
        <div className="circle"></div>
      </div>
      <div className="info">
        <div className="fechayhora">
          <p>23 | 08 | 2024</p>
        </div>
        <a href="https://maps.app.goo.gl/cEh9rj5GatY3c7zx5" target={`_blank`} className="btn-mapa">View Map</a>        
      </div>
      <Clock deadline="august, 23, 2024" />
      <div className="arrow-down">
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </div>
  )
}

export default HomeScreen