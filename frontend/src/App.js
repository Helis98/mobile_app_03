import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import GoalsPage from './pages/GoalsPage';
import LogsPage from './pages/LogsPage';
import ConfirmationPage from './pages/ConfirmationPage';
import SendPasswordResetPage from './pages/SendPasswordResetPage';
import PasswordResetPage from './pages/PasswordResetPage';

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
    <Route path="/Logs" exact>
          <LogsPage />
        
        </Route>
    <Route path="/confirmation" exact>
          <ConfirmationPage />
        </Route>
    <Route path="/sendpassreset" exact>
          <SendPasswordResetPage />
        </Route>
    <Route path="/ResetPass" exact>
          <PasswordResetPage />
        </Route>
        <Redirect to="/" />
      </Switch>  
    </Router>
  );
}

export default App;
