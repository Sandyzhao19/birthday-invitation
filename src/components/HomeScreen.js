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
          <p>29 | 04 | 2023</p>
          <p>21 HS</p>
        </div>
        <p>Guardería Náutica Tifón</p>
        <a href="https://www.google.com/maps/place/Complejo+N%C3%A1utico+Tif%C3%B3n+-+Granadero+Baigorria/@-32.8391242,-60.7002363,16z/data=!4m6!3m5!1s0x95b6516a7efbb155:0x83ff7399f1c380c2!8m2!3d-32.8376684!4d-60.6984178!16s%2Fg%2F11b6_f3zsr" target={`_blank`} className="btn-mapa">Ver mapa</a>        
      </div>
      <Clock deadline="april, 29, 2023" />
      <div className="arrow-down">
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </div>
  )
}

export default HomeScreen