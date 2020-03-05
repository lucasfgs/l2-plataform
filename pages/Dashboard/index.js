import React, { useState, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Account from "./views/Account";
import Donate from "./views/Donate";
import Shop from "./views/Shop";
import Support from "./views/Support";

import { Container, Main, Section, SectionCard } from "./styles";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import api from "../../services/api";

export default function Dashboard({ history }) {
  const [isLogged, setIsLogged] = useState(false);
  useLayoutEffect(() => {
    async function checkLogin() {
      // const token = sessionStorage.getItem("token");
      // console.log(token);
      // const resp = await api.post("/checkLogin", { token: token });
      // const { success } = resp.data;
      // console.log(resp.data);
      // if (!success) history.push("/login");
      // else setIsLogged(true);
    }

    checkLogin();
  }, [history]);
  return (
    <>
      {/* {isLogged && ( */}
      <Container>
        <Sidebar />
        <Main>
          <Header />
          <Section>
            <SectionCard>
              <Switch>
                <Route path="/dashboard/account" component={Account} />
                <Route path="/dashboard/shop" component={Shop} />
                <Route path="/dashboard/donate" component={Donate} />
                <Route path="/dashboard/support" component={Support} />
              </Switch>
            </SectionCard>
          </Section>
        </Main>
      </Container>
      {/* )} */}
    </>
  );
}
