// Child of

import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class OneRow extends Component {
  delete = () => {
    axios
      .get("/encTable/delete/" + this.props.obj._id)
      .then(() => console.log("Entry Deleted"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.obj.regionName}</Table.Cell>
        <Table.Cell>{this.props.obj.regionType}</Table.Cell>
        <Table.Cell>{this.props.obj.regionDifficulty}</Table.Cell>
        <Table.Cell selectable>
          <Link to={"/edit/" + this.props.obj._id}>Edit</Link>
        </Table.Cell>
        <Table.Cell selectable onClick={this.delete}>
          Delete
        </Table.Cell>
      </Table.Row>
    );
  }
}
