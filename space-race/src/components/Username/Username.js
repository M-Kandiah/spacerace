import React from 'react'
import '../../App.css'

const Username = () => {
    const username = localStorage.getItem("username")
    return (
        <div>
            <h2 className="user">Hello {username}</h2>
        </div>
    )
}

export default Username
