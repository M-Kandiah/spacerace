import React, {useContext} from 'react'
import { UserContext } from '../../contexts'
import '../../App.css';

const Container = () => {
    // get number of players here then map them to a list
    const players = []
    const renderPlayers = () => {
        return players.map(p => <li>{p}</li>);
    }
    return (
        <div>
            <ul>
            {renderPlayers()}
            </ul>
        </div>
    )
}

export default Container
