import React, { Component } from 'react';


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var Animations = ["bounceIn", "fadeIn", "zoomIn", "lightSpeedIn", "rotateIn"]
export default class App extends Component {

render() {

    return (
      <div id="carousel">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner bg-dark-transparent">
          <div className="carousel-caption noselect">
              <h2 className={"wow "+ Animations[getRandomInt(4)]}>{this.props.text}</h2>

              </div>
            <div className="carousel-item active block">
              <img id="img-dark" className="d-block w-100 minh-50 img-dark" src={this.props.image} alt="First slide" />
              
            </div>


          </div>
          
        </div>
      </div> 
      );
  }
};

