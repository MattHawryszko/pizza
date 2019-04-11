import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import TopImage from "../components/top-image"

import Image1 from "../img/145801-e1466429354215-1500x645.jpg"

import "../styles/index.css";

export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <section id="reservations">
        <div className="w-100">
          <Navbar history={this.props.history}/>
          <TopImage image={Image1} text="Reservation"/>
          <Footer history={this.props.history}/>
        </div>
      </section>
    );
  }
}
