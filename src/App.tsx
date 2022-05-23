import { Provider } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import routes from "./config/routes";
import stores from "./stores";
import "./App.css";

ReactDOM.render(
  <HashRouter>
    <Provider {...stores}>{renderRoutes(routes)}</Provider>
  </HashRouter>,
  document.getElementById("root")
);
