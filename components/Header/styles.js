import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  width: 100%;

  /* background-image: linear-gradient(62deg, #d05f23 0%, #bb471d 100%); */
  border: 1px solid #adadad;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
`;

export const Profile = styled.div`
  align-self: center;
  margin-right: auto;
`;

export const ProfileText = styled.h1`
  color: #66615b;
  font-size: 18px;
  font-weight: 400;
`;

export const Logout = styled.a`
  margin: auto 0;
  color: #66615b;
  cursor: pointer;

  :hover {
    color: #ff4242;
  }
`;
