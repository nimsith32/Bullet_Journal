import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Myjournal from "./Components/MyJournal";
import Todolist from "./Components/TodoList";
import Signin from "./Components/Login/SignIn";
import Signup from "./Components/Login/Signup";

import Navbar from "./Components/Navbar/Navbar";
function App() {
  return(
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/myjournal" component={Myjournal} exact>
            <Myjournal />
          </Route>
          <Route path="/todolist" component={Todolist} exact>
            <Todolist />
          </Route>
          <Route path="/signin" component={Signin} exact>
            <Signin />
          </Route>
          <Route path="/signup" component={Signup} exact>
            <Signup />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
