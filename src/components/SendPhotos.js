import React from 'react'
import { Button } from 'react-bootstrap'
import './sendPhotos.css'
import luna from '../assets/luna1.png'
import estrella1 from '../assets/estrella1.png'
import estrella2 from '../assets/estrella2.png'
import flecha from '../assets/flecha1.png'

const SendPhotos = () => {
  return (
    <div className="fotos-container">
      <div className="visuals">
        <img src={luna} alt="" className='luna' />
        <img src={estrella1} alt="" className='estrella1' />
        <img src={estrella2} alt="" className='estrella2' />
        <img src={flecha} alt="" className='flecha' />
      </div>
      <h3>¿Querés compartirme tus fotos después de la fiesta?</h3>
      <Button className="fotos-btn" href="https://drive.google.com/drive/folders/1RCoi5G4KZueUHciqAmcNVw1rHp2Blj9B?usp=sharing" target="_blank">¡Pasalas por acá!</Button>
    </div>
  )
}

export default SendPhotos