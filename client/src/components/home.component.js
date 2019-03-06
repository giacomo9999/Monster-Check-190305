import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

export default class Home extends Component {
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
          Welcome to MonsterCheck
        </Header>
      </Container>
    );
  }
}
