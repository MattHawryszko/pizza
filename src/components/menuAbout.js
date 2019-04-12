import React, { Component } from 'react';

import Image from "../img/193621-750x500.jpg"


export default class App extends Component {
render() {
    return (
      <div className="container py-sm-5">
        <div className="row bg-yellow">
          <div className="col-12 col-xl-6 p-0 ">
          <img src={Image} alt="" className="wow slideInLeft img-fill img-fluid" />
          </div>
          <div className="col-12 col-xl-6 p-5 wow fadeIn slow">
            <h3 className="pt-2 text-white">Our Menu</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et repellendus consequuntur labore vel amet nemo doloribus, enim qui fugit?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil minus pariatur accusamus mollitia modi sit aperiam qui consequatur voluptate laudantium, eveniet placeat amet. Velit quae nisi explicabo saepe? Minima, praesentium!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum beatae totam consectetur est ipsum dicta temporibus cumque laboriosam! Vitae, esse?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quasi modi quidem culpa nostrum sit assumenda, iste hic pariatur et.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae inventore officiis dolorem dolorum laudantium temporibus quos minima at aspernatur iure!</p>
          </div>
        </div>
      </div>   
      );
  }
};

