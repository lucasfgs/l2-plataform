import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { login } from "../../store/actions";

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

function Login({ login }) {
  const [user, setUser] = useState({});

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    const resp = await api.post("/login", user);

    const { token, user: userData } = resp.data;

    sessionStorage.setItem("token", token);

    login(userData);
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
            <Link
              style={{ textDecoration: "none", margin: "auto" }}
              to="/dashboard"
            >
              <Button onClick={handleSubmit}>
                <span>Login</span>
              </Button>
            </Link>

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

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch)
});
export default connect(null, mapDispatchToProps)(Login);
