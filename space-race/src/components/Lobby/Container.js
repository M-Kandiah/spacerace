import React, {useContext} from 'react'
import { UserContext } from '../../contexts'

const Container = () => {
    // get number of players here then map them to a list
    let players = [{username: 'john'}, {username: 'ria'}]
    const renderPlayers = () => {
        return players.map(p => <li>{p}</li>);
    }
    return (
        <div>
            {renderPlayers()}
        </div>
    )
}

export default Container
