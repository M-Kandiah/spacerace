import React from 'react'
import '../../App.css';
export default function Logoutbtn() {
    const handleClick = async () => {
        localStorage.clear()
        setTimeout(()=> {
            window.location.reload()
        },10)
    } 
    return (
        <div>
            <button className="navbarBtn" onClick={handleClick}>Sign Out</button>
        </div>
    )
}
