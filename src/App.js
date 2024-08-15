import React from 'react'
import './App.css';
import Footer from './components/Footer';
import FormAsistencia from './components/FormAsistencia.js';
import HomeScreen from './components/HomeScreen';
import RopaFormal from './components/RopaFormal';
import SendPhotos from './components/SendPhotos';


function App() {
  
  return (
    <div>
      <HomeScreen />
      <RopaFormal />
      {/* <FormAsistencia /> */}
      <SendPhotos />
      <Footer />
    </div>

  );
}

export default App;
