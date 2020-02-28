import React, { useState, useLayoutEffect } from "react";

import { Container } from "./styles";
import Header from "../../components/Header";
import api from "../../services/api";

export default function Dashboard({ history }) {
  const [isLogged, setIsLogged] = useState(false);
  useLayoutEffect(() => {
    async function checkLogin() {
      const token = sessionStorage.getItem("token");
      console.log(token);

      const resp = await api.post("/checkLogin", { token: token });
      const { success } = resp.data;
      console.log(resp.data);

      if (!success) history.push("/login");
      else setIsLogged(true);
    }

    checkLogin();
  }, [history]);
  return <Container>{isLogged && <Header />}</Container>;
}
