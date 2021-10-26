import React, {useContext} from 'react'
import {UserContext} from '../../contexts';
import Container from '../../components/Lobby/Container'

import {io} from 'socket.io-client'

const Waiting = () => {
    const {room, lobby} = useContext(UserContext)
    const startButton = () => {
        if (lobby == 'host') {
            return <button>Start Game</button>
        } else {
            return <p>Waiting for host to start the game...</p>
        }
    }
    return (
        <div>
            {room.id}
            {/* header with room id & main menu button */}
            {/* container with player info */}
            {/* <Container/> */}
            {/* start game button/waiting p */}
            {startButton()}
        </div>
    )
}

export default Waiting
