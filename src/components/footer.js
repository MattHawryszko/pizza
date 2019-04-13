import React, { Component } from 'react';

export default class App extends Component {
handleEvent = event => {
  const props = this.props;
  if(event.target.id != "home")
    props.history.push('/'+event.target.id)
  else
    props.history.push('/')
};
render() {
    return (
      <footer id="footer" className="page-footer bg-dark">
        <ul className="navbar-nav text-white " id="navbar-list">
          <li className="nav-link text-center" id="home" onClick={this.handleEvent}>Home</li>
          <li className="nav-link text-center" id="menu" onClick={this.handleEvent}>Menu</li>
          <li className="nav-link text-center" id="jobs" onClick={this.handleEvent}>Jobs</li>
          
          <li className="nav-link text-center" id="gallery" onClick={this.handleEvent}>Gallery</li>
          <li className="nav-link text-center" id="reservations" onClick={this.handleEvent}>Reservations</li>
        </ul>
      </footer>     
      );
  }
};

