import React from 'react'

const Username = () => {
    const username = localStorage.getItem("username")
    return (
        <div>
            <h2 className="text-center">Hello {username}</h2>
        </div>
    )
}

export default Username
