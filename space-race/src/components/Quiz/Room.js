import React from 'react'
import io from 'socket.io-client'
import { useState } from 'react'

const Room = () => {

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
