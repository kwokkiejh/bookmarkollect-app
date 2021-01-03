import React from "react";
import "./App.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MyBookmarks from "./pages/MyBookmarks";
import TopAppBar from "./components/TopAppBar";
import Test from "./pages/Test";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: "#dceae3",
      main: "#008b94",
      contrastText: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 25,
      },
    },
  },
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/bookmarks"></Redirect>
            </Route>
            <Route path="/bookmarks" component={MyBookmarks} exact />
            <Route path="/test" component={Test} exact />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
