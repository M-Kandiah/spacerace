import React, {useContext, useState} from 'react'
import {UserContext} from '../../contexts';
import {useHistory} from 'react-router-dom'
import { socket } from '../../App';
import NavbarNm from '../../components/NavBar/Navbar-nm';
import '../../App.css';

const Waiting = () => {
    const {room, lobby, setRoom, users, setUsers} = useContext(UserContext)
    const [name, setName] = useState('')
    const history = useHistory()
    
    socket.on("start", (room,url) => {
        console.log("hello")
        setRoom(room)
        console.log(room.id)
        history.push(url)
        console.log(room.name)
    })

    const handleClick = (e) => {
        e.preventDefault()
        console.log(users)
        socket.emit("start-game", room, "/game")
    }
    
    const startButton = () => {
        if (lobby == 'host') {
            return <button className="waiting-button" onClick={handleClick}>Start Game</button>
        } else {
            return <p className="waiting-message">Waiting for host to start the game...</p>
        }
    }

    socket.on('updateUsersList', active => {
        setUsers(active)
    })

    socket.on("joined-room", (roomId, user) => {
            console.log(user)
            setName(roomId)
            
    })

    // when host starts game do a broadcast thing
    return (
        <div>
            <NavbarNm/>
            
            <div className="d-flex flex-column justify-content-center waiting">
            <h2 className="room-name">Room name: {name}</h2>
            <div aria-label="connectedUsers" className="user-container">
            <h4 className="players">Players:</h4>
            {users.map(user => <p>- {user}</p>)}
            </div>
            {startButton()}
            </div>
        </div>
    )
}

export default Waiting
