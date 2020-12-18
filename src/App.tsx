import React from "react";
import "./App.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MyBookmarks from "./containers/MyBookmarks";
import TopAppBar from "./containers/TopAppBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/bookmarks"></Redirect>
          </Route>
          <Route path="/bookmarks" component={MyBookmarks} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
