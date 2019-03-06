import React, { Component } from "react";
import { Container, Header, Form, Button } from "semantic-ui-react";
const uuidv1 = require("uuid/v1");

export default class Create extends Component {
  state = {
    regionName: "",
    id: "",
    regionType: "",
    regionDifficulty: 0,
    regionMonstersAndFreq: []
  };

  onChangeRegionName(e) {
    this.setState({ regionName: e.target.value });
  }

  onChangeRegionType(e) {
    this.setState({ regionType: e.target.value });
  }

  onChangeRegionDifficulty(e) {
    this.setState({ regionDifficulty: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(
      `The values are: ${this.state.regionName},${this.state.regionType},${
        this.state.regionDiffculty
      }`
    );
    this.setState({
      regionName: "",
      id: "",
      regionType: "",
      regionDifficulty: 0,
      regionMonstersAndFreq: []
    });
  }

  render() {
    return (
      <Container text>
        <br />
        <Header
          as="h3"
          textAlign="center"
          style={{
            fontSize: "1.5",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "2em"
          }}
        >
          Create New Table
        </Header>
        <Form>
          <Form.Field>
            <label>Region Name</label>
            <input placeholder="Region Name" />
          </Form.Field>
          <Form.Field>
            <label>Region Type</label>
            <input placeholder="Region Type" />
          </Form.Field>
          <Form.Field>
            <label>Region Difficulty</label>
            <input placeholder="Difficulty" />
          </Form.Field>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
