import React, { Component } from 'react';

import Image1 from "../img/181859-750x500.jpg"
import Image2 from "../img/IMG_0438-750x500.jpg"
import Image3 from "../img/194141-750x500.jpg"
import Image4 from "../img/152908-750x500.jpg"

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

          <div className="wow fadeIn col-12 col-md-6 col-lg-8 thumb-img">
            <img src={Image4} alt="" className="img-square img-fluid p-2" />
          </div>
          <div className="wow fadeIn m-2 m-md-0 col-12 col-md-6 col-lg-4 thumb-img justify-content-center d-flex bg-yellow">
            <div className="row p-2 justify-content-center d-flex my-auto">
            <h3 className="p-2 text-white">Impressions</h3>
            <p className="p-2 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis exercitationem quisquam laudantium culpa, deserunt labore.</p>
            </div>
          </div>
        </div>
      </div>   
      );
  }
};

