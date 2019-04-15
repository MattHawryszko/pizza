import React, { Component } from 'react';

import Image1 from "../img/185550-1500x1000.jpg"
import Image2 from "../img/190218-1500x1000.jpg"
import Image3 from "../img/191354-1500x1000.jpg"
import Image4 from "../img/Naamloos-1.png"

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var Animations = ["bounceIn", "fadeIn", "zoomIn", "slideInUp", "rotateIn"]
export default class App extends Component {
componentWillMount(){
  this.setState({animation: Animations[getRandomInt(4)]})
}
render() {

    return (
      <div id="carousel">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner bg-dark-transparent">
          <div className="carousel-caption noselect">
              <h2 className={"wow "+ this.state.animation}>Scott's Famous italian Pizzeria</h2>
              <h2 className={"wow "+ this.state.animation}>Located in Brooklyn New York</h2>
              <h2 className={"wow "+ this.state.animation}>(928) 222 - 0394</h2>
              </div>
            <div className="carousel-item active">
              <img id="img-dark" className="d-block w-100 minh-50 img-dark" src={Image1} alt="First slide" />
              
            </div>
            <div className="carousel-item">
              <img id="img-dark" className="d-block w-100 minh-50 img-dark" src={Image2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img id="img-dark" className="d-block w-100 minh-50 img-dark" src={Image3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img id="img-dark" className="d-block w-100 minh-50 img-dark" src={Image4} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          
        </div>
      </div> 

      );
  }
};

