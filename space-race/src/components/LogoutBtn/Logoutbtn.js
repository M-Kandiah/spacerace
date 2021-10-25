import React from 'react'

export default function Logoutbtn() {
    const handleClick = async () => {
        localStorage.clear()
        setTimeout(()=> {
            window.location.reload()
        },10)
    } 
    return (
        <div>
            <button onClick={handleClick}>Sign Out</button>
        </div>
    )
}
