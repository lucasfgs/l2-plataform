import React, { useState } from "react";

import {
  Container,
  Background,
  LogoImage,
  LogoRedirect,
  LoginContainer,
  Form,
  FormContent,
  ForgotPassword,
  Button,
  SecondaryButton,
  CreateAccountContainer,
  FormText
} from "./styles";
import Logo from "../../assets/img/logob1.png";
import Input from "../../components/Input";
import api from "../../services/api";

function Login() {
  const [user, setUser] = useState({});

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    const resp = await api.post("/login", user);

    const { token, user: userData } = resp.data;

    sessionStorage.setItem("token", token);

    console.log(token, userData);
  }

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
              onChange={handleChange}
            />
            <Input
              title="Password"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <ForgotPassword>Forgot your password?</ForgotPassword>
            <Button onClick={handleSubmit}>
              <span>Login</span>
            </Button>
            <CreateAccountContainer>
              <FormText>Dont have a account yet?</FormText>
              <SecondaryButton href="">
                <span>Create Account</span>
              </SecondaryButton>
            </CreateAccountContainer>
          </FormContent>
        </Form>
      </LoginContainer>
    </Container>
  );
}

export default Login;
