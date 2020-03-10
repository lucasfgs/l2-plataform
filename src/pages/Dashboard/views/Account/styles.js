import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #66615b;
`;

export const SettingsContainer = styled.div`
  margin: 20px 0;
`;

export const Setting = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
`;

export const SettingContent = styled.div``;

export const SettingTitle = styled.h1`
  font-size: 18px;
  font-weight: 500px;
`;

export const SettingInput = styled.input`
  margin-top: 5px;
  height: 35px;
  width: 300px;
  font-size: 16px;
  color: #66615b;
  padding: 0 5px;
`;

export const SettingButton = styled.button`
  height: 40px;
  width: 300px;
  border: none;
  border-radius: 3px;
  background: #ff652b;
  outline: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  :hover {
    background: #ff804e;
  }
`;
