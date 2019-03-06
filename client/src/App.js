import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Header } from "semantic-ui-react";

import MenuBar from "./components/menuBar.component";

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <Container text>
        
          <br />
          <Header
            as="h2"
            textAlign="center"
            style={{
              fontSize: "2em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: "3em"
            }}
          >
            MonsterCheck CRUD App
          </Header>
        </Container>
      </div>
    );
  }
}

export default App;
