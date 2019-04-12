import React, { Component } from 'react';


import BoxImage from "../img/box.png"

export default class App extends Component {
render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="wow slideInLeft faster col-12 col-md-6 col-lg-4 thumb-img">
            <img src={BoxImage} alt="" className="img-fluid" />
          </div>
          <div className="wow slideInRight faster col-12 col-md-6 col-lg-8 my-auto">
            <h1 className="text-yellow">Not for you?</h1>
            <p className="text-light-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem veritatis fugiat accusamus pariatur dolor expedita rerum magni! Facilis, magnam quas. dolor sit amet, consectetur adipisicing elit. Commodi quo maxime reprehenderit error quidem illum, rerum asperiores recusandae inventore aperiam quod voluptate consequuntur itaque est. Cum in possimus odio labore.</p>
          </div>
        </div>
      </div> 


      );
  }
};

