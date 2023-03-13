import React, {useState, useMemo} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/home/Home";
import Myjournal from "./Components/MyJournal";
import Todolist from "./Components/TodoList/TodoList";
import Register from "./Components/Login/Register";
import FinancialGoals from "./Components/FinancialGoals";
import Navbar from "./Components/Navbar/Navbar";
import { UserContext } from "./Components/UserContext";


function App() {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({user, setUser}), [user, setUser]);
  return(
      <Router>
        <Navbar />
        <Switch>
          <UserContext.Provider value={value} >
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
          </UserContext.Provider>
        </Switch>
      </Router>
  );
}
const Collapse = ({ collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <>
      <button
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? 'Show' : 'Hide'} content
      </button>
      <div
        className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  );
};

export default App;
