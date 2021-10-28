import React, {useContext, useState} from 'react'
import {UserContext} from '../../contexts';
import {useHistory} from 'react-router-dom'
import { socket } from '../../App';
import NavbarNm from '../../components/NavBar/Navbar-nm';

const Waiting = () => {
    const {room, lobby, setRoom, users, setUsers} = useContext(UserContext)

    const history = useHistory()
    
    socket.on("start", (room,url) => {
        console.log("hello")
        setRoom(room)
        console.log(room.id)
        history.push(url)
    })

    const handleClick = (e) => {
        e.preventDefault()
        console.log(users)
        socket.emit("start-game", room, "/game")
    }
    
    const startButton = () => {
        if (lobby == 'host') {
            return <button onClick={handleClick}>Start Game</button>
        } else {
            return <p>Waiting for host to start the game...</p>
        }
    }

    socket.on('updateUsersList', active => {
        setUsers(active)
    })

    socket.on("joined-room", (roomId, user) => {
            console.log(user)
    })

    // when host starts game do a broadcast thing
    return (
        <div>
            <NavbarNm/>
            {room.name}
            {/* header with room id & main menu button */}
            {/* container with player info */}
            {users.map(user => <p>{user}</p>)}
            {/* <Container/> */}
            {/* start game button/waiting p */}
            {startButton()}
        </div>
    )
}

export default Waiting
