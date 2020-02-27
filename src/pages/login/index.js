import React from "react";

import {
  Container,
  Background,
  LogoImage,
  LoginContainer,
  Form,
  Title,
  FormContent
} from "./styles";
import Logo from "../../assets/img/logo.png";
import Input from "../../components/Input";

export default function login() {
  return (
    <Container>
      <Background>
        <LogoImage src={Logo} />
      </Background>
      <LoginContainer>
        <Form>
          <Title>Login</Title>
          <FormContent>
            <Input
              title="E-mail *"
              name="email"
              placeholder="example@example.com"
            />
            <Input title="Password *" name="password" type="password" />
          </FormContent>
        </Form>
      </LoginContainer>
    </Container>
  );
}
