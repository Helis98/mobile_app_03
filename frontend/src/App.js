import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import GoalsPage from './pages/GoalsPage';
import LogsPage from './pages/LogsPage';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/SignUp" exact>
          <SignUpPage />
        </Route>
		<Route path="/Home" exact>
          <HomePage />
        </Route>
		<Route path="/Goal" exact>
          <GoalsPage />
        </Route>
		<Route path="/Log" exact>
          <LogsPage />
        </Route>
        <Redirect to="/" />
      </Switch>  
    </Router>
  );
}

export default App;
