import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;

  :not(:first) {
    margin-top: 10px;
  }

  label {
    font-size: 20px;
    color: #ff804e;
    font-weight: 400;
    margin-bottom: 5px;

    span {
      color: #f5311b;
      margin-left: 5px;
    }
  }

  input {
    height: 40px;
    background: #312d3a;
    outline: none;
    border: none;
    border-bottom: 3px solid #ff804e;
    padding-left: 5px;
    color: #ff804e;
    font-size: 16px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #312d3a inset !important;
    -webkit-text-fill-color: #ff804e;
  }

  input:focus {
    border: 2px solid #ff804e;
  }

  input::placeholder {
    color: #fcb581;
    font-size: 14px;
  }
`;
