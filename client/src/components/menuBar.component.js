import React from "react";
import { Container, Menu } from "semantic-ui-react";

const FixedMenuLayout = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          MonsterCheck CRUD App
        </Menu.Item>
        <Menu.Item as="a">Index</Menu.Item>
        <Menu.Item as="a">Edit</Menu.Item>
        <Menu.Item as="a">Create</Menu.Item>
      </Container>
    </Menu>
  </div>
);

export default FixedMenuLayout;
