import React from "react";
import "./App.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MyBookmarks from "./pages/MyBookmarks";
import Test from "./pages/Test";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import MyCollections from "./pages/MyCollections";

const theme = createMuiTheme({
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
            <Route path="/collections" component={MyCollections} exact />
            <Route path="/test" component={Test} exact />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
