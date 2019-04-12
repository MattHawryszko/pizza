import React, { Component } from 'react';

import TakeOutImage from "../img/takeout.png"
import OvenImage from "../img/190230-750x500.jpg"

export default class App extends Component {
render() {
    return (
      <div className="container pt-5">
      <div className="row">
        <div className="wow slideInLeft faster col-12 col-md-6 col-lg-4 thumb-img">
          <img src={TakeOutImage} alt="" className="img-fluid" />
        </div>
        <div className="wow slideInRight faster col-12 col-md-6 col-lg-8 my-auto">
          <h2 className="text-yellow">Take Out</h2>
          <p className="text-light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui soluta ipsa, vero aliquid reprehenderit commodi amet eum quam ea. Ad, sapiente. Fugiat placeat hic quo eligendi vero rerum necessitatibus.</p>
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

