import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './formAsistencia.css'

const FormAsistencia = () => {
  const [count, setCount] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault()
    const formEle = document.querySelector("form")
    const formData = new FormData(formEle)

    for (let [key] of formData) {
      if(key === "Count") {
        formData.set(key, `${count}`);
      }
    }

    fetch("https://script.google.com/macros/s/AKfycby20VxFTpmDOW08lq4Pf2nk3pV4hfOugn9hjiMDiN-GsoPKLLclZxkETCnKdNXPUMiyfg/exec", {
      method: "POST",
      body: formData
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))    

    toast.success("Respuestas guardadas", {
      autoClose: 2000,
      position: 'bottom-center'
    })

  }

  return (
    <Container fluid className="container">
      <ToastContainer />
      <h2>Confirmación de asistencia</h2>
      <Form className="form" onSubmit={(e) => submitHandler(e)}>
        <Form.Group className="mb-5 cant-per">
          <Form.Label>Cantidad de personas</Form.Label>
          <Form.Group className="change-amount">
            <Button onClick={() => {
              if(count > 0 ) {
                setCount(count - 1)
              }
            }}>
              -
            </Button>
            <Form.Control
              className="countInput"
              type="number"
              placeholder={count}
              readOnly="readOnly"
              name="Count" 
            />
            <Button  onClick={() => setCount(count + 1)}>
              +
            </Button>
          </Form.Group>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>{count <= 1  ? 'Nombre' : 'Nombres'}</Form.Label>
          <Form.Control
            className="nameInput"
            placeholder={count <= 1 ? 'Ingrese su nombre' : 'Ingrese los nombres de los invitados'}
            type="text"
            name="Name"
          />            
        </Form.Group>
        <Form.Group className="mb-5">
          <p className="make-less">{count <= 1  ? '¿Necesita un menú especial?' : '¿Alguno de los invitados necesita un menú especial?'}</p>
          <div className="make-less menues">
            <p>Celíaco</p>
            <p>Vegetariano</p>
            <p>Vegano</p>
            <p>Menú infantil</p>
            <p>Otro (indicar cuál)</p>
          </div>
          <Form.Control
            className="menuInput"
            placeholder="Ingresar opción"
            type="text"
            name="Menu"
          />            
        </Form.Group>
        <Form.Group className="mb-5 sugerirMusica">
          <Form.Label>Sugerir música, artista, canción</Form.Label>
          <Form.Control
            className="menuInput"
            placeholder="Ingresar opción"
            type="text"
            name="Cancion"
          />            
        </Form.Group>
        <Button className="btn-submit" type='submit'>Enviar</Button>
      </Form>
    </Container>
  )
}

export default FormAsistencia