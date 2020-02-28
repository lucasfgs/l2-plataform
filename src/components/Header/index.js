import React from "react";

import {
  Container,
  LogoContainer,
  Logo,
  Menu,
  MenuItem,
  Logout
} from "./styles";

import logo from "../../assets/img/logob1.png";

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <Menu>
        <MenuItem>Account</MenuItem>
        <MenuItem>Shop</MenuItem>
        <MenuItem>Donate</MenuItem>
        <MenuItem>Support</MenuItem>
      </Menu>
      <Logout>Logout</Logout>
    </Container>
  );
}
