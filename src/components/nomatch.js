import React, { Component } from 'react';

export default class App extends Component {
render() {
    return (
        <div>
        <h3>No match for <code>{this.props.location.pathname}</code></h3>
      </div>     
      );
  }
};

