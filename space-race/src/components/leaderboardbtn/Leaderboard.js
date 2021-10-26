import React from 'react'

export default function Leaderboard() {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href= '/leaderboard'
    }
    return (
        <div>
            <button onClick={handleClick}>LEADERBOARDS</button>
        </div>
    )
}
