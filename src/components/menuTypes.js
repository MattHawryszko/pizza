import React, { Component } from 'react';

import Image from "../img/192032-240x240.jpg"
import Image2 from "../img/181859-750x500.jpg"
import Image3 from "../img/152908-750x500.jpg"
import Image4 from "../img/183236-240x240.jpg"

export default class App extends Component {
render() {
    return (
      <div className="bg-dark pb-5">
        <div className="container py-5">
          <div className="row justify-content-center d-flex py-5">
            <div className="col-12 wow bounceIn">
              <h1 className="text-white text-center">Our Menu's</h1>
              <h5 className="text-white text-center">View the dishes here on our different cards.</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12 p-0 ">
              <div className="justify-content-center d-flex">
                <img src={Image} alt="" className="wow fadeIn rounded-circle img-menu p-3"/>
                
              </div>
              <h4 className="text-white text-center">Dishes</h4>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 p-0">
              <div className="justify-content-center d-flex">
                <img src={Image2} alt="" className="wow fadeIn rounded-circle img-menu p-3"/>
              </div>
              <h4 className="text-white text-center">Pizza</h4>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 p-0">
              <div className="justify-content-center d-flex">
                <img src={Image3} alt="" className="wow fadeIn rounded-circle img-menu p-3"/>
              </div>
              <h4 className="text-white text-center">Wine</h4>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 p-0">
              <div className="justify-content-center d-flex">
                <img src={Image4} alt="" className="wow fadeIn rounded-circle img-menu p-3"/>
              </div>
              <h4 className="text-white text-center">Dessert's</h4>
            </div>
          </div>
        </div>

      </div>   
      );
  }
};

