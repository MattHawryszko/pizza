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
      
<footer className="page-footer bg-dark pt-4">

    
    <div className="container-fluid text-center text-md-left">

      
      <div className="row">

        
        <div className="col-md-6 mt-md-0 mt-3">

          
          <h5 className="text-uppercase text-white">Footer Content</h5>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia debitis quia hic maxime. Et mollitia repellat culpa odio excepturi, deleniti distinctio magni sint quibusdam explicabo animi consectetur, deserunt doloremque.</p>

        </div>
        

        

        
        <div className="col-md-3 mb-md-0 mb-3">

           
            <h5 className="text-uppercase text-light-grey text-center">Links</h5>

        <ul className="navbar-nav text-white " id="navbar-list">
          <li className="nav-link text-center" id="home" onClick={this.handleEvent}>Home</li>
          <li className="nav-link text-center" id="menu" onClick={this.handleEvent}>Menu</li>
          <li className="nav-link text-center" id="jobs" onClick={this.handleEvent}>Jobs</li>
          
          <li className="nav-link text-center" id="gallery" onClick={this.handleEvent}>Gallery</li>
          <li className="nav-link text-center" id="reservations" onClick={this.handleEvent}>Reservations</li>
        </ul>
        
          </div>
         

          
          <div className="col-md-3 mb-md-0 mb-3 ">

            
          <h5 className="text-light-grey text-center">Hour's of operation</h5>
          <ul className="pb-2">
            <li className="text-white text-center navbar-nav">Monday	9:30 am	- 9:30 pm</li>
            <li className="text-white text-center navbar-nav">Tuesday	9:30 am	- 9:30 pm</li>
            <li className="text-white text-center navbar-nav">Wednesday	9:30 am	- 9:30 pm</li>
            <li className="text-white text-center navbar-nav">Thursday	9:30 am	- 9:30 pm</li>
            <li className="text-white text-center navbar-nav">Friday	9:30 am	- 9:30 pm</li>
            <li className="text-white text-center navbar-nav">Saturday	9:30 am	- 9:30 pm</li>
            <li className="text-white text-center navbar-nav">Sunday	9:30 am	- 9:30 pm</li>
          
          </ul>

          </div>
         

      </div>
   

    </div>
    

   
    <div className="footer-copyright bg-black text-center py-3 text-white">© 2019 Copyright:
      <a href="https://pizza.matthawryszko.me" className="text-light-grey"> Scott's Pizzeria</a>
    </div>


  </footer>

      );
  }
};

