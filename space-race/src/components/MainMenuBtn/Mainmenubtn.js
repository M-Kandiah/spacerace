import React from 'react'

export default function Mainmenubtn() {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href= '/main-menu'
    }
    return (
        <div>
            <button onClick={handleClick}>Main Menu</button>
        </div>
    )
}
