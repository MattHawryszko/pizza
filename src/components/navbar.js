import React, { Component } from 'react';

export default class App extends Component {
handleEvent = event => {
  const props = this.props;
  props.history.push('/'+event.target.id)
};
render() {
    return (
        <div>
          <nav className="navbar navbar-expand-sm navbar-light" id="navbar">
            <div className="container">
                <div className="row justify-content-between justify-content-md-end pt-2">
                  <a onClick={this.openModal} role="button" className="btn toggleNav pl-4 pt-1 pb-2 d-flex d-sm-none" data-toggle="modal" data-target="#exampleModal1"><i className="p-0 m-0 fas fa-bars toggleNav"></i></a>
                </div>

                <h1 id="" onClick={this.handleEvent}>Scott's Pizzeria</h1>
                <div className="collapse navbar-collapse justify-content-end" id="navbar1">

                <ul className="navbar-nav">
                  <li id="menu" onClick={this.handleEvent}>Menu</li>
                  <li id="jobs" onClick={this.handleEvent}>Jobs</li>
                  <li id="gallery" onClick={this.handleEvent}>Gallery</li>
                  <li id="reservations" onClick={this.handleEvent}>Reservations</li>
                </ul>

                </div>
            </div>
        </nav>

          
        </div>     
      );
  }
};

