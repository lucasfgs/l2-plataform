import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 100%;
  /* background-color: #1e1c24; */
  background-color: #24202f;
  background-image: linear-gradient(90deg, #24202f 80%, #1e1c24 100%);

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
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  background-color: #24202f;
  background-image: linear-gradient(90deg, #24202f 80%, #1e1c24 100%);

  :hover {
    filter: brightness(1.2);
  }

  .icon {
    margin-right: 10px;
    margin-left: 20px;
    font-size: 25px;
  }

  ${props =>
    props.active &&
    `
    color: #ff804e;

    ::after {
    content: " ";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 26px 15px 0;
    border-color: transparent #f4f3ef transparent transparent;
    margin-left: auto;
  }`}
`;
