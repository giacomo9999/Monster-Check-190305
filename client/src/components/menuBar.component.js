import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Create from "./create.component";
import Index from "./index.component";
import Edit from "./edit.component";

const MenuBar = () => (
  <div>
    <Router>
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              MonsterCheck CRUD App
            </Menu.Item>
            <Menu.Item as="a">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item as="a">
              <Link to="/create">Create</Link>
            </Menu.Item>
            <Menu.Item as="a">
              <Link to="/index">Index</Link>
            </Menu.Item>
          </Container>
        </Menu>
        <Switch>
          <Route exact path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/index" component={Index} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default MenuBar;
