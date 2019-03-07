import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";

export default class OneRow extends Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.obj.regionName}</Table.Cell>
        <Table.Cell>{this.props.obj.regionType}</Table.Cell>
        <Table.Cell>{this.props.obj.regionDifficulty}</Table.Cell>
        <Table.Cell color="orange" selectable>
          <a href="#">Edit</a>
        </Table.Cell>
        <Table.Cell selectable>
          <a href="#">Delete</a>
        </Table.Cell>

        {/* <Button compact size="small" color="teal">
          Edit
        </Button>
        <Button compact size="small" color="teal">
          Delete
        </Button> */}
      </Table.Row>
    );
  }
}
