import React, {useState, useMemo} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Myjournal from "./Components/MyJournal/MyJournal";
import Todolist from "./Components/TodoList/TodoList";
import Register from "./Components/Login/Register";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { UserContext } from "./Components/UserContext";
import FinancialTracker from "./Components/FinancialTracker/FinancialTracker";
import TodoCalendar from "./Components/Calender/TodoCalendar";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import 'flowbite';

function App() {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({user, setUser}), [user, setUser]);
  return(
    <div className="w-full h-full min-h-screen">
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
            <Route path="/FinancialTracker" component={FinancialTracker} exact>
              <FinancialTracker />
            </Route>
            <Route path="/TodoCalendar" component={TodoCalendar} exact>
              <TodoCalendar />
            </Route>
            <Route path="/register" component={Register} exact>
              <Register />
            </Route>
          </UserContext.Provider>
        </Switch>
      </Router>

      
    


    </div>
    
  );
}
export default App;
