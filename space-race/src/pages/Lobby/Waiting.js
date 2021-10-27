import React, {useContext, useState} from 'react'
import {UserContext} from '../../contexts';
import {useHistory} from 'react-router-dom'
import Container from '../../components/Lobby/Container'
import { socket } from '../../App';
import {io} from 'socket.io-client'
import NavbarNm from '../../components/NavBar/Navbar-nm';

const Waiting = () => {
    const {room, lobby, setRoom} = useContext(UserContext)

    const history = useHistory()
    const [users,setUsers] = useState('')


    const handleClick = (e) => {
        e.preventDefault()
        console.log(room)
        socket.emit("start-game", room, "/game")
    }

    socket.on('start', (room,url) => {
        console.log("hello")
        setRoom(room)
        history.push(url)
    })
    
    const startButton = () => {
        if (lobby == 'host') {
            return <button onClick={handleClick}>Start Game</button> 
        } else {
            return <p>Waiting for host to start the game...</p>
        }
    }

    socket.on("joined-room", (roomId, user) => {
        console.log(roomId)
        console.log(user)
        setUsers(user)
    })

    // when host starts game do a broadcast thing
    return (
        <div>
            <NavbarNm/>
            {room.id}
            {/* header with room id & main menu button */}
            {/* container with player info */}
            {/* <Container/> */}
            {/* start game button/waiting p */}
            {startButton()}
            { users ? `${users} is waiting...` : ''}
        </div>
    )
}

export default Waiting
