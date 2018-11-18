import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../common/common.css';

export default class EduApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>this is the DESIGN X EDUCATION APP</h2>
        </div>
      </div>
    );
  }
}