import React, { Component } from 'react';

import Image1 from "../img/185550-1500x1000.jpg"
import Image2 from "../img/190218-1500x1000.jpg"
import Image3 from "../img/191354-1500x1000.jpg"
import Image4 from "../img/Naamloos-1.png"


export default class App extends Component {
render() {
    return (
      <div id="carousel">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner bg-dark-transparent">
          <div className="carousel-caption noselect">
              <h2>Scott's Famous italian Pizzeria</h2>
              <h2>Located in Brooklyn New York</h2>
              <h2>(928) 222 - 0394</h2>
              </div>
            <div class="carousel-item active">
              <img id="img-dark" class="d-block w-100 minh-50 img-dark" src={Image1} alt="First slide" />
              
            </div>
            <div class="carousel-item">
              <img id="img-dark" class="d-block w-100 minh-50 img-dark" src={Image2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img id="img-dark" class="d-block w-100 minh-50 img-dark" src={Image3} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img id="img-dark" class="d-block w-100 minh-50 img-dark" src={Image4} alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          
        </div>
      </div> 

      );
  }
};

