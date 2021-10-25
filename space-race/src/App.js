import './App.css';
import {UserContext} from './contexts'
import {useContext} from 'react';

function App() {
  return (
    <>
    <UserContext.Provider>
    <h1>Sam is cool</h1>
    </UserContext.Provider>
    </>
  );
}

export default App;
