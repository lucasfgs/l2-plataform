import styled from "styled-components";

import bg from "../../assets/img/login-bg.jpg";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #3b3648;
`;
export const Background = styled.div`
  background: url(${bg}) no-repeat;
  background-size: cover;
  flex: 1;
  opacity: 0.7;
  display: flex;
`;
export const LogoImage = styled.img`
  width: 350px;
  align-self: flex-start;
  margin: 40px auto;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex: 1;
`;
export const Form = styled.div`
  width: 450px;
  margin: auto;
`;
export const Title = styled.h1``;
export const FormContent = styled.div``;
