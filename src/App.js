import axios from "axios";
import React from "react";
import { BrowserRouter, Redirect, Route, NavLink } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TableComponent from "./components/TableComponent";
import Layout from "./components/Layout";
import LoginModule from './components/LoginModule'

function App() {
  const userContext = React.createContext();
  const [userInfo, setUserInfo] = React.useState();
  const [isLoggedIn, setLogin] = React.useState(localStorage.getItem('sessionExist'));
  console.log(userInfo);
  let sessionExist = localStorage.getItem('sessionExist');

  return (
    <div>
      {/* <Layout> */}
        <userContext.Provider value={userInfo}>
          <BrowserRouter>
            
            <Route
              path="/login"
              exact
              render={() => <LoginModule setLogin={setLogin}></LoginModule>}
            ></Route>
            <Route
              path="/dashboard"
              exact
              render={() => <Dashboard setLogin={setLogin} setUser={setUserInfo} />}
            ></Route>
            {isLoggedIn?<Redirect to="/dashboard" />:<Redirect to="/login" />}
          </BrowserRouter>
        </userContext.Provider>
      {/* </Layout> */}
    </div>
  );
}

export default App;
