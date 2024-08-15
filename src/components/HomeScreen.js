import React from 'react'
import Clock from './Clock'
import './homeScreen.css'
import logo from '../assets/mis15.png'
import invited from '../assets/invited.png'
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
        <div className="invited">
          <img src={invited} alt="" className='invited' />
        </div>
        <div className="fechayhora">
          <p><b>Date</b> August 23, 2024 Friday</p>
        </div>

        <div className="fechayhora">
          <p><b>Theme</b> Colorburst - Wear something colorful!</p>
        </div>

        <div className="fechayhora">
          <p><b>Dinner</b> Lolo and Lola 6:30PM </p>
        </div>

        <a href="https://maps.app.goo.gl/UZ7S4iM66LcLk2Y6A" target={`_blank`} className="btn-mapa">View Dinner Map</a>    

        <br/>
        <div className="fechayhora">
          <p><b>Party</b> Metropol 8:30PM onwards</p>
        </div>

        <a href="https://maps.app.goo.gl/i2KU7DeJBpwhhwTX6" target={`_blank`} className="btn-mapa">View Party Map</a>        
      </div>
      <Clock deadline="august, 23, 2024" />
      <div className="arrow-down">
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </div>
  )
}

export default HomeScreen