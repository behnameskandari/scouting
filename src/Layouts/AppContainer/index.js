import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Main = React.lazy(() => import("../../Views/Main"));
const Scouting = React.lazy(() => import("../../Views/Scouting"));


function AppContainer() {

  return (
    <div >
      <Router>
        <Switch>
          <Route path="/scouting">
            <Scouting />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export { AppContainer };
