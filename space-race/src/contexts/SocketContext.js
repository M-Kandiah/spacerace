import { createContext, useState, useEffect } from 'react';
import React from 'react'

import io from 'socket.io-client'
export const SocketContext = createContext();
const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState()

    useEffect(() => {
        const newSocket = io("http://localhost:3000")
        setSocket(newSocket)
        return () => {
            newSocket.close()
        }
    }, [])

    return (
        <div>
            <SocketContext.Provider value={{socket,setSocket}}>
                {children}
            </SocketContext.Provider>
        </div>
    )
}

export default SocketContextProvider

