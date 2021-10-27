import React, {useContext, useState} from 'react'
import {UserContext} from '../../contexts';
import {useHistory} from 'react-router-dom'
import Container from '../../components/Lobby/Container'
import { socket } from '../../App';
import {io} from 'socket.io-client'

const Waiting = () => {
    const {room, lobby} = useContext(UserContext)
    const history = useHistory()
    const [user,setUser] = useState('')

    
    socket.on("start", (roomId,url) => {
        console.log("hello")
        history.push(url)
    })

    const handleClick = (e) => {
        e.preventDefault()
        console.log(room.id)
        socket.emit("start-game", room.id, "/game")
    }
    
    const startButton = () => {
        if (lobby == 'host') {
            return <button onClick={handleClick}>Start Game</button>
        } else {
            return <p>Waiting for host to start the game...</p>
        }
    }

    socket.on('joined-room', (roomId, user) => {
        console.log(user)
        setUser(user)
    })

    // when host starts game do a broadcast thing
    return (
        <div>
            {room.id}
            {/* header with room id & main menu button */}
            {/* container with player info */}
            {/* <Container/> */}
            {/* start game button/waiting p */}
            {startButton()}
            {user}
        </div>
    )
}

export default Waiting
