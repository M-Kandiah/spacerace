import React from 'react'
import io from 'socket.io-client'
import { useState, useContext } from 'react'
import { SocketContext } from '../../contexts/SocketContext'


const Room = () => {

const {socket, setSocket} = useContext(SocketContext)

    const onsubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        const room = e.target[0].value
    }

    

    return (
        <div>
            <form onSubmit={onsubmit}>
                <label> Room ID
                    <br />
                    <input></input>
                </label>
                <input type='submit' value="Join Room"></input>
            </form>
        </div>
    )
}

export default Room
