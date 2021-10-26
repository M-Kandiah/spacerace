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
import {useContext, useState} from 'react';
import Lobby from './pages/Lobby'
import axios from 'axios'

import NavbarLogReg from './components/NavBar/Navbar-logreg';
import Mainmenu from './pages/main-menu/Mainmenu';
import Winsleaderboard from './pages/wins-lb/Winsleaderboard';



function App() {
  const [room, setRoom] = useState({
    category: '',
    rounds: '',
    limit: '',
    difficulty: ''
  });
<<<<<<< HEAD
  

 
=======
  const [lobby, setLobby] = useState('')
  const [players, setPlayers] = useState([])
>>>>>>> 8b7b78808f70b5838043485694ba32587868190c
  return (
    <>
    <UserContext.Provider value={{room, setRoom, lobby, setLobby, players, setPlayers}}>
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
            <Mainmenu/>
            </PrivateRoute>
            <PrivateRoute path="/lobby">
              <Lobby/>
            </PrivateRoute>
            <PrivateRoute path="/leaderboard">
              <Winsleaderboard/>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
