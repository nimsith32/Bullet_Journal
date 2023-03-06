import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Myjournal from "./Components/MyJournal";
import Todolist from "./Components/TodoList/TodoList";
import Register from "./Components/Login/Register";
import FinancialGoals from "./Components/FinancialGoals";


import Navbar from "./Components/Navbar/Navbar";
function App() {
  return(
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} exact>
            <Home />
          </Route>
          <Route path="/myjournal" component={Myjournal} exact>
            <Myjournal />
          </Route>
          <Route path="/todolist" component={Todolist} exact>
            <Todolist />
          </Route>
          <Route path="/financialGoals" component={FinancialGoals} exact>
            <FinancialGoals />
          </Route>
          <Route path="/register" component={Register} exact>
            <Register />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
