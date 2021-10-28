import React from 'react'
import '../../App.css';

export default function CreateRoom() {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href= '/lobby'
    }
    return (
        <div>
            <button className="mainMenuBtns" onClick={handleClick}>CREATE ROOM</button>
        </div>
    )
}
