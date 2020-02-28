import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  width: 100%;
  background: #3b3648;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
  height: 55px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  width: 300px;
`;

export const MenuItem = styled.li`
  margin: auto;
  color: #e5e5e5;
  cursor: pointer;

  :hover {
    color: #ff804e;
  }
`;

export const Logout = styled.a`
  margin: auto 0;
  color: #e5e5e5;
  cursor: pointer;

  :hover {
    color: #ff4242;
  }
`;
