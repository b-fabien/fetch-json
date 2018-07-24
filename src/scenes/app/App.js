import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import "./App.css";

import FetchJSon from "../fetchJSon";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FetchJSon />
      </div>
    );
  }
}

export default App;
