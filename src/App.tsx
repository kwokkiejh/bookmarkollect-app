import React from "react";
import "./App.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MyBookmarks from "./pages/MyBookmarks";
import Test from "./pages/Test";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import MyCollections from "./pages/MyCollections";

const paletteTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#dceae3",
      main: "#3B959B",
      contrastText: "#fff",
    },
  },
});
const theme = createMuiTheme(
  {
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 25,
        },
      },
      MuiIconButton: {
        root: {
          "&:hover": {
            backgroundColor: paletteTheme.palette.primary.light,
          },
        },
      },

      MuiListItem: {
        root: {
          "&$selected": {
            backgroundColor: paletteTheme.palette.primary.light,
          },
        },
        button: {
          "&:hover": {
            backgroundColor: paletteTheme.palette.primary.light,
          },
        },
      },
      MuiMenuItem: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.08)",
            textDecoration: "none",
          },
        },
      },
    },
  },
  paletteTheme
);

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
            <Route path="/collections/:title" component={MyCollections} />
            <Route path="/test" component={Test} exact />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
