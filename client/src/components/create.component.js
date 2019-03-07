import React, { Component } from "react";
import { Container, Header, Form, Button } from "semantic-ui-react";
import axios from "axios";
const uuidv1 = require("uuid/v1");

export default class Create extends Component {
  state = {
    regionName: "",
    id: "",
    regionType: "",
    regionDifficulty: 0,
    regionMonstersAndFreq: []
  };

  onChangeRegionName = e => {
    // console.log("Changing region name...");
    this.setState({ regionName: e.target.value });
    // console.log(this.state);
  };

  onChangeRegionType = e => {
    // console.log("Changing region type...");
    this.setState({ regionType: e.target.value });
    // console.log(this.state);
  };

  onChangeRegionDifficulty = e => {
    // console.log("Changing region difficulty...", e.target.value);
    this.setState({ regionDifficulty: e.target.value });
    // console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(
      `React Create Component submitting add: `,
      this.state.regionName,
    );
    const newTable = {
      regionName: this.state.regionName,
      id: uuidv1(),
      regionType: this.state.regionType,
      regionDifficulty: this.state.regionDifficulty,
      regionMonstersAndFreq: [
        { freq: -999, name: "placeholder" },
        { freq: -998, name: "placeholder 2" }
      ]
    };

    axios
      .post("/encTable/add", newTable)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    this.setState({
      regionName: "",
      id: "",
      regionType: "",
      regionDifficulty: 0,
      regionMonstersAndFreq: []
    });
  };

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
            <input
              type="text"
              placeholder="Region Name"
              defaultValue={this.state.regionName}
              onChange={this.onChangeRegionName}
            />
          </Form.Field>
          <Form.Field>
            <label>Region Type</label>
            <input
              type="text"
              placeholder="Region Type"
              defaultValue={this.state.regionType}
              onChange={this.onChangeRegionType}
            />
          </Form.Field>
          <Form.Field>
            <label>Region Difficulty</label>
            <input
              type="text"
              placeholder="Difficulty"
              defaultValue={this.state.regionDifficulty}
              onChange={this.onChangeRegionDifficulty}
            />
          </Form.Field>

          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </Container>
    );
  }
}
