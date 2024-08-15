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

      <div className="drinks-container">
        <h3>Please feel free to put in the drinks and snacks you wanna have in the party</h3>
        <Button className="drinks-btn" href="https://docs.google.com/spreadsheets/d/1kvL_lZwpOd6dWKF9I0PQynNdGVNEkzjHuTDvKuvZjOA/edit?usp=sharing" target="_blank"><p>Check Form</p></Button>
      </div>

      <h3>Do you want to share your photos with me after the party?</h3>
      <Button className="fotos-btn" href="https://drive.google.com/drive/folders/1bVPj4U6b3Ly1AD4Slq9MLsgU-ntfzuf-?usp=sharing" target="_blank">Pass photos around</Button>
    </div>
  )
}

export default SendPhotos