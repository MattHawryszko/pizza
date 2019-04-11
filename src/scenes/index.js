import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import Carousel from "../components/carousel"
import Welcome from "../components/welcome"
import TopImage from "../components/top-image"

import PastaImg from "../img/182239-1500x1000.jpg"

import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "@fortawesome/fontawesome-free"

export default class App extends Component {
  componentDidMount(){ 
    
  }
  render() {
    return (
      <section id="index">
        <div className="w-100">
          <Navbar history={this.props.history}/>
          <Carousel />
          <Welcome />
          <TopImage text="Authentic itailan pasta" image={PastaImg} />
          <Footer history={this.props.history}/>
        </div>
      </section>
    );
  }
}
