import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Header } from "semantic-ui-react";
import Index from "./components/index.component";
import Edit from "./components/edit.component";
import Create from "./components/create.component";

class App extends Component {
  render() {
    return (
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
        <Index />
        <Edit />
        <Create />

      </Container>
    );
  }
}

export default App;
