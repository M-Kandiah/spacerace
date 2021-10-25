import './App.css';
import Login from './components/Login/Login';
import { AuthProvider } from "./components/contexts/auth"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import NoTokenRoute from './components/routes/NoTokenRoute'
import PrivateRoute from './components/routes/PrivateRoute' 
import Register from './components/Register/index'
import {UserContext} from './contexts'
import {useContext} from 'react';

import NavbarMain from './components/NavBar/Navbar';
import NavbarLogReg from './components/NavBar/Navbar-logreg';


function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <NoTokenRoute path='/login'>
              <NavbarLogReg/>
              <Login /> 
            </NoTokenRoute>
            <Route path="/register"> 
            <NavbarLogReg/>
            <Register />
            </Route> 
            <Route path="/" exact>
              <Redirect to="/main-menu" />
            </Route>
            <PrivateRoute path="/main-menu" exact>
            <NavbarMain /> 
            <h1>Sam is cool</h1>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
