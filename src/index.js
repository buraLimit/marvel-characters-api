import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./state/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./MuiTheme";
import { BrowserRouter as Router } from "react-router-dom";

export const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);

