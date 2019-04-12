import React, { Component } from 'react';

import Image1 from "../img/181859-750x500.jpg"
import Image2 from "../img/IMG_0438-750x500.jpg"
import Image3 from "../img/194141-750x500.jpg"
import Image4 from "../img/152908-750x500.jpg"
import OvenImage from "../img/190230-750x500.jpg"

export default class App extends Component {
render() {
    return (
      <div className="container">
        <div className="row">
          <div className="wow fadeIn col-12 col-md-6 col-lg-4 thumb-img">
            <img src={Image1} alt="" className="img-square img-fluid p-2" />
          </div>
          <div className="wow fadeIn col-12 col-md-6 col-lg-4 thumb-img">
            <img src={Image2} alt="" className="img-square img-fluid p-2" />
          </div>
          <div className="wow fadeIn col-12 col-md-12 col-lg-4 thumb-img">
            <img src={Image3} alt="" className="img-square img-fluid p-2" />
          </div>
        </div>
        <div className="row py-2">
          <div className="wow fadeIn col-12 col-md-12 col-lg-4 thumb-img">
            <img src={Image3} alt="" className="img-square img-fluid p-2" />
          </div>
          <div className="wow fadeIn col-12 col-md-12 col-lg-8 thumb-img">
            <img src={Image4} alt="" className="img-square img-fluid p-2" />
          </div>
        </div>
        <div className="row py-2">
          <div className="wow fadeIn col-12 col-md-12 col-lg-6 thumb-img ">
            <img src={Image3} alt="" className="img-square img-fluid p-2 " />
          </div>
          <div className="wow fadeIn col-12 col-md-12 col-lg-6 thumb-img">
            <img src={Image4} alt="" className="img-square img-fluid p-2" />
          </div>
        </div>
        <div className="row">
          <div className="wow fadeIn col-12 col-md-6 col-lg-4 thumb-img">
            <img src={Image1} alt="" className="img-square img-fluid p-2" />
          </div>
          <div className="wow fadeIn col-12 col-md-6 col-lg-4 thumb-img">
            <img src={Image2} alt="" className="img-square img-fluid p-2" />
          </div>
          <div className="wow fadeIn col-12 col-md-12 col-lg-4 thumb-img">
            <img src={Image3} alt="" className="img-square img-fluid p-2" />
          </div>
        </div>
        <div className="row py-3">

          <div className="wow fadeIn col-12 col-md-6 col-lg-8 thumb-img">
            <img src={Image4} alt="" className="img-square img-fluid p-2" />
          </div>
          <div className="wow fadeIn col-12 col-md-6 col-lg-4 thumb-img">
            <img src={Image3} alt="" className="img-square img-fluid p-2" />
          </div>
        </div>
        <div className="row flex-column-reverse flex-md-row bg-yellow">
          <div className="wow slideInLeft col-12 col-md-6 col-lg-4 my-auto">
          <h2 className="text-white">Reservation</h2>
            <p className="text-white">Call now to book a Reservation. We are available every day from 11 am onward (928) 222 - 0394</p>
          </div>
          <div className="wow slideInRight col-12 col-md-6 col-lg-8 thumb-img">
            <img src={OvenImage} alt="" className="img-square" />
            
          </div>
        </div>
      </div>   
      );
  }
};

