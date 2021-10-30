import React from "react";
import ReactDOM from "react-dom";
import { ExchangeRate } from "./components/ExchangeRate";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./style.css";
import { getInitialRates } from "./store/rates";

//kick start AJAX call for exchange rates
store.dispatch(getInitialRates);

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById("root")
);
