import React from "react";

import { Container } from "./styles";

export default function Input({
  title,
  type = "text",
  name,
  placeholder = ""
}) {
  return (
    <Container>
      <label htmlFor="">{title}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </Container>
  );
}
