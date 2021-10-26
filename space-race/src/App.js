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
import { UserContext } from './contexts'
import { useContext } from 'react';
import Category from './components/Quiz/Category';
import { io } from 'socket.io-client'
import Room from './components/Quiz/Room';

import { useState } from 'react';
import Lobby from './pages/Lobby'

import NavbarLogReg from './components/NavBar/Navbar-logreg';
import Mainmenu from './pages/main-menu/Mainmenu';
import SocketContextProvider from './contexts/SocketContext';

export const socket = io("http://localhost:3001");

socket.on('connect', () => {
  console.log(`You are connected with ${socket.id}`)
})

// socket.on('join-room', (roomName) => {
//   socket.join(roomName)
// })


function App() {
  const [room, setRoom] = useState({
    category: '',
    rounds: '',
    limit: '',
    difficulty: ''
  });
  const [lobby, setLobby] = useState('')
  const [players, setPlayers] = useState([])
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
          </Switch>
        </Router>
      </AuthProvider>
      </UserContext.Provider>
    </>
  );
}

export default App
