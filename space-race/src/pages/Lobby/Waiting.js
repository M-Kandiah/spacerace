import React, {useContext} from 'react'
import {UserContext} from '../../contexts';
import Container from '../../components/Lobby/Container'

const Waiting = () => {
    const {lobby, setLobby} = useContext(UserContext)
    const startButton = () => {
        if (lobby == 'host') {
            
        }
    }
    return (
        <div>
            {/* header with room id & main menu button */}
            {/* container with player info */}
            <Container/>
            {/* start game button/waiting p */}
            <h1>hello sam</h1>
        </div>
    )
}

export default Waiting
