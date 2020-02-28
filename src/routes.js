import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function routes() {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
    </BrowserRouter>
  );
}
