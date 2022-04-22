import React, { Component } from "react";
import CVform from "./components/CVform";

class App extends Component {
  constructor() {
    super();
    this.state = {
      things: [],
    };
  }
  render() {
    return (
      <div className="App">
        <CVform />
      </div>
    );
  }
}

export default App;
