import React from 'react'
import '../../App.css';

export default function Leaderboard() {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href= '/leaderboard'
    }
    return (
        <div >
            <button className="mainMenuBtns" onClick={handleClick}>LEADERBOARDS</button>
        </div>
    )
}
