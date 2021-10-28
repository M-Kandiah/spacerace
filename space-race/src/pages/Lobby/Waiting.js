import React, {useContext, useState, useEffect} from 'react'
import {UserContext} from '../../contexts';
import {useHistory} from 'react-router-dom'
import Container from '../../components/Lobby/Container'
import { socket } from '../../App';
import {io} from 'socket.io-client'
import NavbarNm from '../../components/NavBar/Navbar-nm';

const Waiting = () => {
    const {room, lobby, setRoom} = useContext(UserContext)

    const history = useHistory()
    const [users,setUsers] = useState([])

    
    socket.on("start", (room,url) => {
        console.log("hello")
        setRoom(room)
        // console.log(room.id)
        history.push(url)
    })

    const handleClick = (e) => {
        e.preventDefault()
        // console.log(room)
        socket.emit("start-game", room, "/game")
    }

    const startButton = () => {
        if (lobby == 'host') {
            return <button onClick={handleClick}>Start Game</button> 
        } else {
            return <p>Waiting for host to start the game...</p>
        }
    }
    let userList = []
    socket.on("joined-room", (users) => {
        // console.log(roomId)
        console.log(users)
        userList.push(users)
        setUsers(userList)
    })

    

    // when host starts game do a broadcast thing
    return (
        <div>
            <NavbarNm/>
            {room.name}
            {/* header with room id & main menu button */}
            {/* container with player info */}
            {/* <Container/> */}
            {/* start game button/waiting p */}
            {startButton()}
            {users.map(user => <p>{user} is waiting...</p>)}
        </div>
    )
}

export default Waiting
