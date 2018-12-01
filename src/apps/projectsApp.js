import React, { Component } from 'react';
import logo from '../logo.svg';
import '../common/common.css';

export default class ProjectsApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>projects homepage</h2>
        </div>
      </div>
    );
  }
}