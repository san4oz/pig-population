import React, { Component } from "react";
import "./App.css";
import { PigPopulation } from './pigPopulation';

/*
  To be done(but i don't have time): prop types, memo, css modules.
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="task-page">
          <h2>Hawaiian Pig Visualization </h2>
          <PigPopulation />
        </div>
      </div>
    );
  }
}

export default App;
