import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  label {
    font-size: 24px;
    color: #f2591d;
    font-weight: 400;
    margin-bottom: 5px;
  }

  input {
    height: 40px;
    background: #312d3a;
    outline: none;
    border: none;
    border-bottom: 3px solid #f2591d;
    padding-left: 5px;
    color: #f2591d;
    font-size: 16px;
  }

  input:focus {
    border: 2px solid #f2591d;
  }

  input::placeholder {
    color: #f58b62;
    font-size: 14px;
  }
`;
