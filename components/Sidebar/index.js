import React from "react";

import {
  MdAccountBox,
  MdShoppingCart,
  MdPayment,
  MdHelp
} from "react-icons/md";

import {
  Container,
  LogoContainer,
  Logo,
  Divider,
  Menu,
  MenuItem
} from "./styles";

import logo from "../../assets/img/logob1.png";

export default function Sidebar() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <Divider />
      <Menu>
        <MenuItem active={true}>
          <MdAccountBox className="icon" />
          Account
        </MenuItem>
        <MenuItem>
          <MdShoppingCart className="icon" />
          Shop
        </MenuItem>
        <MenuItem>
          <MdPayment className="icon" />
          Donate
        </MenuItem>
        <MenuItem>
          <MdHelp className="icon" />
          Support
        </MenuItem>
      </Menu>
    </Container>
  );
}
