import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Car from "./pages/Car";
import Newcar from "./pages/Newcar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/home/:placa" component={Home} />
        <Route path="/newcar" component={Newcar} />
        <Route path="/:id" component={Car} />
      </Switch>
    </Router>
  );
}

export default App;
