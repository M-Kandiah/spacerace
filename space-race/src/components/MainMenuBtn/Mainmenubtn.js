import React from 'react'
import '../../App.css';
export default function Mainmenubtn() {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href= '/main-menu'
    }
    return (
        <div>
            <button className="navbarBtn" type="button" onClick={handleClick}>Main Menu</button>
        </div>
    )
}
