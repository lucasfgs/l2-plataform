import React from "react";

import {
  Container,
  Background,
  LogoImage,
  LogoRedirect,
  LoginContainer,
  Form,
  FormContent,
  ForgotPassword,
  Button
} from "./styles";
import Logo from "../../assets/img/logob1.png";
import Input from "../../components/Input";

export default function login() {
  return (
    <Container>
      <Background />
      <LoginContainer>
        <LogoRedirect href="/">
          <LogoImage src={Logo} />
        </LogoRedirect>
        <Form>
          <FormContent>
            <Input
              title="E-mail"
              name="email"
              placeholder="example@example.com"
            />
            <Input title="Password" name="password" type="password" />
            <ForgotPassword>Forgot your password?</ForgotPassword>
            <Button href="">
              <span>Login</span>
            </Button>
          </FormContent>
        </Form>
      </LoginContainer>
    </Container>
  );
}
