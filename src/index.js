import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { Auth0Provider } from './contexts/auth0-context';


ReactDOM.render(
  <Auth0Provider>
    <Main />
  </Auth0Provider>,
  document.getElementById('root')
);
