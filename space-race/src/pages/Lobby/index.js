import React, { useContext, useState } from 'react'
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
    const [roomSet, setRoomSet] = useState(true)

    const handleChange = (e) => {
        e.preventDefault()
        if(roomSet === true) {
            setRoomSet(false)
        } if(e.target.value === "") {
            setRoomSet(true)
        }
    }

    const { room, setRoom, setLobby, lobby } = useContext(UserContext)
    const handleSubmit = (e) => {
        setRoom({
            name: e.target[0].value,
            category: category[e.target[1].selectedIndex].id,
            difficulty: e.target[2].value,
            rounds: e.target[3].value,
           
        });
        setLobby('host')
        const user = localStorage.getItem('username')
        socket.emit("join-room", e.target[0].value, user)
        history.push(`/waitingroom`)
    }

   
return (
    <div>
        <NavbarNm />
        <form onSubmit={handleSubmit} className="create">
            
            <input type="text" placeholder="Enter room name" onChange={handleChange}/>
            <label> Select Category
            <Category />
            </label>
            <label> Select Difficulty
            <Difficulty />
            </label>
            <label> How Many Rounds ?
            <Rounds />
            </label>
            
            <input type="submit" value="Create" disabled={roomSet} className="submit-form"></input>
        </form>
    </div>
)
}

export default Quiz;
