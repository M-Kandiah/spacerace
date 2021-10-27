import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Category from '../../components/Lobby/Category';
import Difficulty from '../../components/Lobby/Difficulty';
import Limit from '../../components/Lobby/Limit';
import Rounds from '../../components/Lobby/Rounds';
import { UserContext } from '../../contexts';
import { category } from '../../categoryList'
import NavbarNm from '../../components/NavBar/Navbar-nm';
import { socket } from '../../App';

const Quiz = () => {
    const history = useHistory()

    const { room, setRoom, setLobby, lobby } = useContext(UserContext)
    const handleSubmit = (e) => {
        setRoom({
            name: e.target[2].value,
            category: category[e.target[3].selectedIndex].id,
            difficulty: e.target[4].value,
            rounds: e.target[5].value,
            limit: e.target[6].value
        });
        setLobby('host')
        const user = localStorage.getItem('username')
        socket.emit("join-room", e.target[2].value, user)
        history.push(`/waitingroom`)
    }
return (
    <div>
        <form onSubmit={handleSubmit}>
            <NavbarNm />
            <input type="text" placeholder="room name"/>
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
