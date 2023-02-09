import React from 'react'
import './App.css';
import Footer from './components/Footer';
import FormAsistencia from './components/FormAsistencia.js';
import HomeScreen from './components/HomeScreen';
import RopaFormal from './components/RopaFormal';


function App() {
  
  return (
    <div>
      <HomeScreen />
      <RopaFormal />
      <FormAsistencia />
      <Footer />
    </div>

  );
}

export default App;
