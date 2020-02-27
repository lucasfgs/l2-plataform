import styled from "styled-components";

import bg from "../../assets/img/login-bg2.jpg";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #3b3648;

  @media (max-height: 560px) {
    height: 100%;
  }
`;
export const Background = styled.div`
  background: url(${bg}) no-repeat;
  background-size: cover;
  flex: 1;
  opacity: 0.7;
  display: flex;
  flex-direction: column;

  box-shadow: 10px 0px 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const LogoImage = styled.img`
  width: 350px;
`;

export const LogoRedirect = styled.a`
  align-self: flex-start;
  margin: 0 auto;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const Form = styled.div`
  width: 450px;
  margin: auto;
`;
export const Title = styled.h1``;
export const FormContent = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
`;

export const ForgotPassword = styled.a`
  color: #ff804e;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;

  :hover {
    color: #ff652b;
  }
`;

export const Button = styled.a`
  height: 45px;
  width: 250px;
  margin: auto;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #ff804e;
  background-image: linear-gradient(62deg, #ff804e 0%, #f15d21 100%);
  font-size: 20px;
  letter-spacing: 1px;
  color: #ddd;

  span {
    z-index: 2;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    background-color: #006754;
    background-image: linear-gradient(62deg, #006754 0%, #005a24 100%);
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  :hover::before {
    opacity: 1;
    width: 100%;
  }
`;

export const SecondaryButton = styled.a`
  height: 40px;
  width: 200px;
  margin-top: 10px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #ddd;
  border-radius: 5px;
  border: 2px solid #ddd;
  font-size: 18px;

  :hover {
    background: #353144;
    border: 2px solid #27ae60;
  }
`;

export const FormText = styled.span`
  color: #ddd;
  font-size: 16px;
`;
export const CreateAccountContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
