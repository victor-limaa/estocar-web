import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Car from './pages/Car'
import Newcar from './pages/Newcar'



function App() {

  
  return (
    <Router>
      <Switch>

        <Route path='/' exact component={Login} />
        <Route path='/home'
          component={localStorage.getItem('authorization-token') ? Home : Login }/>
          <Route path='/home/:placa'
          component={localStorage.getItem('authorization-token') ? Home : Login }/>
        <Route path='/newcar'
          component={Newcar} />
        <Route path='/:id'
          component={localStorage.getItem('authorization-token') ? Car : Login} />
          

      </Switch>
    </Router>
  );
}

export default App;
