import React, { Component } from 'react';


import PastaImg from "../img/182239-1500x1000.jpg"
export default class App extends Component {
render() {
    return (
      <div className="bg-dark-transparent">
        <img id="img-dark" class="d-block w-100 minh-50 img-dark" src={PastaImg} alt="First slide" />
        <h1 class="centered-img-text text-white">Authentic itailan pasta</h1>
      </div> 


      );
  }
};

