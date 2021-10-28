import React, {useContext} from 'react'
import '../../App.css';
import {socket} from '../../App'
import {UserContext} from '../../contexts'

export default function Mainmenubtn() {
    const {room} = useContext(UserContext)

    const handleClick = (e) => {
        e.preventDefault();
        socket.emit('leave-room', room.name)
        window.location.href= '/main-menu'
    }
    return (
        <div>
            <button className="navbarBtn" type="button" onClick={handleClick}>Main Menu</button>
        </div>
    )
}
