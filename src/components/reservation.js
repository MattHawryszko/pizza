import React, { Component } from 'react';
import Hours from "./hoursCard"

export default class App extends Component {

render() {
    return (
      <div className="container py-5">
        <div className="row pb-5">
          <div className="col-12 col-md-8 px-5">
            <h3 className="font-weight-bold">Reservation</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reprehenderit labore officia possimus enim ex obcaecati facilis odio recusandae incidunt deleniti, nam maxime sed saepe.</p>
            <h3 className="font-weight-bold">Pick-up</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius nesciunt. Maxime praesentium dicta corporis?</p>
            
            <ul class="text-light-grey">
              <li className="d-flex py-2 pt-5">
                <a href="tel:0592-314801" class="icon">
                <span class="fa-stack fa-2x mx-auto">
                <i class="fa fa-circle fa-stack-2x text-black-50"></i>
                <i class="fas fa-phone fa-stack-1x text-white"></i>
                </span>
              </a>
              <div class="content">

                <a href="tel:212-695-2210"><strong className="text-black-50">(212) 695-2210</strong></a>
                <p>Call us for a reservation.</p>
              </div>
            </li>
            <li className="d-flex py-2">
              <a href="mailto:contact@scottspizzeria.com" class="icon">
              <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x text-black-50"></i>
                <i class="fas fa-map-marker-alt fa-stack-1x text-white"></i>
              </span>
              </a>
              <div class="content">
                <a href="mailto:contact@scottspizzeria.com"><strong className="text-black-50">contact@scottspizzeria.com</strong></a>
                <p>You can always email us for any information.</p>
              </div>
            </li>
            <li className="d-flex py-2">
              <a href="https://goo.gl/maps/CCkTNf9zQf92" class="icon">
              <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x text-black-50"></i>
                <i class="fas fa-envelope fa-stack-1x text-white"></i>
              </span>
              </a>
              <div class="content">
                <a href="https://goo.gl/maps/CCkTNf9zQf92"><strong className="text-black-50">Address</strong></a>
                <p>253 W 28th St, New York, NY 10001, USA</p>
              </div>
            </li>
          </ul>
          </div>
          <Hours />
        </div>
        <div className="row pt-5">
          <div className="col-12">
            <h3 className="font-weight-bold">Our location</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam error animi iusto?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.624358855394!2d-73.99778968459397!3d40.748290479328034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9fe464e625baa5e6!2sADI+Global+Distribution!5e0!3m2!1sen!2sca!4v1555262118448!5m2!1sen!2sca" width="100%" height="450" frameborder="0" allowfullscreen></iframe>
          </div> 
        </div>
      </div>

      );
  }
};

