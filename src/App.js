import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas/Canvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome</h2>
        </div>
        <Canvas/>
      </div>
    );
  }
}

export default App;
