import React, { Component } from 'react';

import $ from "jquery"

export default class App extends Component {
handleEvent = event => {
  const props = this.props;
  props.history.push('/'+event.target.id)
};
constructor(props){  
  super(props)
}
componentWillMount(){

}
componentDidMount(){
  try{
    var item = window.location.pathname.replace('/', '')
    var navUL = $('#navbar-list')
    var navLi= navUL.find('#'+item)
    navLi.addClass('active')
  }catch(error){

  }
}
componentWillUpdate(){

}
render() {
    return (
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark" id="navbar">
            <div className="container">
                <div className="row justify-content-between justify-content-md-end pt-2">
                <h1 className="navbar-brand text-center mr-0" onClick={this.handleEvent}>Scott's Pizzeria</h1>
                  <a onClick={this.openModal} role="button" className="btn toggleNav pl-4 pt-1 pb-2 d-flex d-sm-none" data-toggle="modal" data-target="#exampleModal1"><i className="p-0 m-0 fas fa-bars toggleNav"></i></a>
                </div>

               
                <div className="collapse navbar-collapse justify-content-end" id="navbar1">

                <ul className="navbar-nav" id="navbar-list">
                  <li className="nav-link text-center" id="menu" onClick={this.handleEvent}>Menu</li>
                  <li className="nav-link text-center" id="jobs" onClick={this.handleEvent}>Jobs</li>
                  
                  <li className="nav-link text-center" id="gallery" onClick={this.handleEvent}>Gallery</li>
                  <li className="nav-link text-center" id="reservations" onClick={this.handleEvent}>Reservations</li>
                </ul>

                </div>
            </div>
        </nav>

          
        </div>     
      );
  }
};

