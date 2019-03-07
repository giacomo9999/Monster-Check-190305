import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import OneRow from "./oneRow.component";

export default class Edit extends Component {
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
          Welcome to Edit
        </Header>
      </Container>
    );
  }
}
