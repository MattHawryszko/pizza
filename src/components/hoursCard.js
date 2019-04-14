import React, { Component } from 'react';
import OvenImage from "../img/190230-400x270.jpg"

export default class App extends Component {

render() {
    return (
      <div className="col-12 col-md-4 bg-dark p-0">
        <div className="justify-content-center d-flex"> 
          <img src={OvenImage} alt="" className="img-fluid m-0 p-0" />
        </div>
       
        <h3 className="pt-2 text-white text-center">Hour's of operation</h3>
        <ul className="pb-2">
          <li className="text-white text-center">Monday	9:30 am	- 9:30 pm</li>
          <li className="text-white text-center">Tuesday	9:30 am	- 9:30 pm</li>
          <li className="text-white text-center">Wednesday	9:30 am	- 9:30 pm</li>
          <li className="text-white text-center">Thursday	9:30 am	- 9:30 pm</li>
          <li className="text-white text-center">Friday	9:30 am	- 9:30 pm</li>
          <li className="text-white text-center">Saturday	9:30 am	- 9:30 pm</li>
          <li className="text-white text-center">Sunday	9:30 am	- 9:30 pm</li>
         
        </ul>
        

      </div>
      );
  }
};

