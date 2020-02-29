import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 100%;
  background-color: #1e1c24;
  /* background-image: linear-gradient(
    0deg,
    #1e1c24 0%,
    #3b3648 86%,
    #1e1c24 100%
  ); */
  display: flex;
  flex-direction: column;
`;
export const LogoContainer = styled.div`
  margin: 0px auto;
  margin-top: 30px;
`;

export const Logo = styled.img`
  height: 55px;
`;

export const Divider = styled.div`
  width: 80%;
  height: 2px;
  background: #9e9e9e;
  margin: 40px auto;
`;

export const Menu = styled.ul`
  width: 100%;
  justify-self: center;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const MenuItem = styled.li`
  margin: 5px 0;
  color: #e5e5e5;
  cursor: pointer;
  width: 100%;
  height: 50px;
  text-align: center;
  font-family: Montserrat, Helvetica Neue, Arial, sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  display: flex;
  align-items: center;
  background-color: #1e1c24;

  :hover {
    filter: brightness(1.2);
  }

  .icon {
    margin-right: 10px;
    margin-left: 20px;
    font-size: 30px;
  }
`;
