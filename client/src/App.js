import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Card, Header } from "semantic-ui-react";

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

        {/* <Card centered>
          <Card.Content>
            <Card.Header>Matthew Harris</Card.Header>
            <Card.Meta>Co-Worker</Card.Meta>
            <Card.Description>
              Matthew is a pianist living in Nashville.
            </Card.Description>
          </Card.Content>
        </Card> */}
      </Container>
    );
  }
}

export default App;
