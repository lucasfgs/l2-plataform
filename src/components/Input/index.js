import React from "react";

import { Container } from "./styles";

export default function Input({
  title,
  type = "text",
  name,
  placeholder = "",
  required = false
}) {
  return (
    <Container>
      <label htmlFor="">
        {title}
        {required && <span>*</span>}
      </label>
      <input type={type} name={name} placeholder={placeholder} />
    </Container>
  );
}
