import React, { Component } from "react";
import { Container, Header, Table } from "semantic-ui-react";
import axios from "axios";
import OneRow from "./oneRow.component";

export default class Index extends Component {
  state = { encTables: [] };

  componentDidMount = () => {
    axios
      .get("/encTable")
      // .then(res => console.log(res.data))
      .then(res => this.setState({ encTables: res.data }))
      .catch(err => console.log(err));
  };

  createRows = () => {
    return this.state.encTables.map((entry, index) => {
      return <OneRow obj={entry} key={index} />;
    });
  };

  render() {
    return (
      <Container text>
        <br />
        <Header
          as="h5"
          textAlign="center"
          style={{
            fontSize: "2em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "3em"
          }}
        >
          Encounter Tables Index
        </Header>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Region Name</Table.HeaderCell>
              <Table.HeaderCell>Region Type</Table.HeaderCell>
              <Table.HeaderCell>Region Difficulty</Table.HeaderCell>
              <Table.HeaderCell />
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.createRows()}</Table.Body>
        </Table>
      </Container>
    );
  }
}
