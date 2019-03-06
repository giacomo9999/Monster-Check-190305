import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
// import { Container, Header } from "semantic-ui-react";

import MenuBar from "./components/menuBar.component";

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar />
      </div>
    );
  }
}

export default App;
