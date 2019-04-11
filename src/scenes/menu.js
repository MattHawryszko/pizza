import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import "../styles/index.css";

export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
        <Navbar history={this.props.history}/>
      	Menu
        <Footer history={this.props.history}/>
      </div>
    );
  }
}
