import './App.css';
import {UserContext} from './contexts'
import {useContext} from 'react';
import Category from './components/Quiz/Category';

function App() {
  return (
    <>
    <UserContext.Provider>
    <h1>Sam is cool</h1>
    </UserContext.Provider>
    <Category/>
    </>
  );
}

export default App;
