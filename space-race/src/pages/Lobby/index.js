import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Category from '../../components/Lobby/Category';
import Difficulty from '../../components/Lobby/Difficulty';
import Limit from '../../components/Lobby/Limit';
import Rounds from '../../components/Lobby/Rounds';
import { UserContext } from '../../contexts';
import { category } from '../../categoryList'
import NavbarNm from '../../components/NavBar/Navbar-nm';
import {io} from 'socket.io-client'
import { socket } from '../../App';

const Quiz = () => {
    const history = useHistory()

    const {room, setRoom, setLobby} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        // const socket = io('http://localhost:3001');
        socket.on('connect', () => {
            setRoom({
                id: socket.id,
                category: category[e.target[2].selectedIndex].id,
                difficulty: e.target[3].value,
                rounds: e.target[4].value,
                limit: e.target[5].value
            });
            setLobby('host')
            history.push(`/waitingroom`)
        })
    };
    // const url = `https://opentdb.com/api.php?amount=${amt}&category=${category}&difficulty=${difficulty}&type=multiple`;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <NavbarNm />
                <Category />
                <Difficulty />
                <Rounds />
                <Limit />
                <input type="submit" value="Create"></input>
            </form>
        </div>
    )
}

export default Quiz;
