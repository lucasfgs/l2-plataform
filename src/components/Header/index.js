import React from "react";

import { Container, Profile, ProfileText, Logout } from "./styles";

export default function Header() {
  return (
    <Container>
      <Profile>
        <ProfileText>Welcome Lucas Ferreira</ProfileText>
      </Profile>
      <Logout>Logout</Logout>
    </Container>
  );
}
