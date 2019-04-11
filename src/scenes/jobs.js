import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import TopImage from "../components/top-image"

import Image1 from "../img/193110-1500x1000.jpg"

import "../styles/index.css";

export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <section id="jobs">
        <div className="w-100">
          <Navbar history={this.props.history}/>
          <TopImage image={Image1} text="Job's"/>
          
          <Footer history={this.props.history}/>
        </div>
      </section>
    );
  }
}
