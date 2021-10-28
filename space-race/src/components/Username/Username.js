import React from 'react'

const Username = () => {
    const username = localStorage.getItem("username")
    return (
        <div>
            <h2>Hello {username}</h2>
        </div>
    )
}

export default Username
