import React, { Component } from 'react';

import $ from "jquery"

export default class App extends Component {
handleEvent = event => {
  const props = this.props;
  if(event.target.id != "home")
    props.history.push('/'+event.target.id)
  else
    props.history.push('/')
};

componentWillMount(){

}
componentDidMount(){
  try{
    var item = window.location.pathname.replace('/', '')
    var navUL = $('#navbar-list')
    var navLi= navUL.find('#'+item)
    item = item.charAt(0).toUpperCase()+ item.slice(1)
    document.title =  item + " - Scott's Pizzeria"
    navLi.addClass('active')
  }catch(error){
    var navUL = $('#navbar-list')
    var navLi= navUL.find('#home')
    navLi.addClass('active')
    document.title = "Home - Scott's Pizzeria"
  }
}
componentWillUpdate(){

}
render() {
    return (
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark" id="navbar">
            <div className="container">
                <div className="row d-flex w-100">
                  <div className="justify-content-between justify-content-sm-center d-flex pt-2 col-12 col-sm-2">
                    <h1 className="navbar-brand" onClick={this.handleEvent}>Scott's Pizzeria</h1>
                    <a onClick={this.openModal} role="button" className="btn toggleNav pl-4 pt-1 pb-2 d-flex d-sm-none" data-toggle="modal" data-target="#exampleModal1"><i className="p-0 m-0 fas fa-bars fa-2x text-white toggleNav"></i></a>
                  </div>
                  
                </div>
                

               
                <div className="collapse navbar-collapse justify-content-end" id="navbar1">

                <ul className="navbar-nav" id="navbar-list">
                  <li className="nav-link text-center" id="home" onClick={this.handleEvent}>Home</li>
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

