import React from "react";
import { Switch, Route } from "react-router-dom";
import Favorites from "./Favorites";

import MainPage from "./MainPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
    </Switch>
  );
}

export default App;
