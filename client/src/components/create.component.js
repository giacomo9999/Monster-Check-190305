import React, { Component } from "react";
import { Card } from "semantic-ui-react";

export default class Index extends Component {
  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>Create Component</Card.Header>
          <Card.Description>I am the Create component.</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}