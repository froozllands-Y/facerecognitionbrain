import React, {Component} from 'react';
import Navigation from './componnents/Navigation/Navigation';
import Logo from './componnents/Logo/Logo';
import 'tachyons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      {/* <ImageLinkFrom />
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
