import React, { Component } from "react";
import { Card } from "semantic-ui-react";

export default class Index extends Component {
  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>Edit Component</Card.Header>
          <Card.Description>I am the Edit component.</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
