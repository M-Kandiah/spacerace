import { createContext, useState } from 'react';
import React from 'react'
export const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState('')
    return (
        <div>
            <SocketContext.Provider value={{socket,setSocket}}>
                {children}
            </SocketContext.Provider>
        </div>
    )
}

export default SocketContext

