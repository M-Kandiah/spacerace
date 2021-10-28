import React, {useContext} from 'react'
import '../../App.css';
import { BiHomeAlt } from "react-icons/bi";
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
            <button className="navbarBtn" type="button" onClick={handleClick}><BiHomeAlt size="24"/></button>
        </div>
    )
}
