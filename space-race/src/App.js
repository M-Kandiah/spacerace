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

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <NoTokenRoute path='/login'>
              <Login /> 
            </NoTokenRoute>
            <Route path="/register"> 
            <Register />
            </Route> 
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <PrivateRoute path="/home" exact>
            <h1>Sam is cool</h1>
            </PrivateRoute>
          </Switch>
        </Router>
        <h1>Sam is cool</h1>
      </AuthProvider>
    </>
  );
}

export default App;
