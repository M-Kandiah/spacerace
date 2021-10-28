import React from 'react'
import '../../App.css'

const Username = () => {
    const username = localStorage.getItem("username")
    return (
        <div>
            <h2 className="text-center username-heading">Hello {username}</h2>
        </div>
    )
}

export default Username
