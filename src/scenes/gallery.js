import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import TopImage from "../components/top-image"
import FullGallery from "../components/fullGallery"

import Image1 from "../img/185403-1500x998.jpg"

import "../styles/index.css";

export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <section id="gallery">
        <div className="w-100">
          <Navbar history={this.props.history}/>
          
          <TopImage image={Image1} text="Gallery"/>
          <FullGallery />
          <div className="pb-3"></div>
          <Footer history={this.props.history}/>
        </div>
      </section>
    );
  }
}
