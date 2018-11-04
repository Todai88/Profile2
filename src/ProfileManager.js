import React, { Component } from 'react';
import logo from './logo.svg';
import './ProfileManager.css';

class ProfileManager extends Component {
  render() {
    return (
      <div className="ProfileManager">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
        </header>
      </div>
    );
  }
}

export default ProfileManager;
