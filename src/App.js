import React from 'react';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
      <Switch>
        <Route exact path="/">
          This is HOME
        </Route>
        
        <Route exact path="/starred">
          This is STARRED
        </Route>

        
        <Route>
          <h1>404
          </h1>
        </Route>
      </Switch>
  );
}

export default App;
