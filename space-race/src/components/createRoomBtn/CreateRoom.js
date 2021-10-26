import React from 'react'


export default function CreateRoom() {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href= '/lobby'
    }
    return (
        <div>
            <button onClick={handleClick}>CREATE ROOM</button>
        </div>
    )
}
