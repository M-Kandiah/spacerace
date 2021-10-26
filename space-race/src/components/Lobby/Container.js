import React, {useContext} from 'react'
import { UserContext } from '../../contexts'

const Container = () => {
    // get number of players here then map them to a list
    const {players} = useContext(UserContext);
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
