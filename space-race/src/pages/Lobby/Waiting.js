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
<<<<<<< HEAD
            <h1>hello sam</h1>
=======
            {startButton()}
>>>>>>> b186a408ce49ff96859df8e78bd54a2aa565b0f8
        </div>
    )
}

export default Waiting
