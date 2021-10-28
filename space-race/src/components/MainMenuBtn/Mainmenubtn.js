import React from 'react'
import '../../App.css';
import { BiHomeAlt } from "react-icons/bi";
export default function Mainmenubtn() {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href= '/main-menu'
    }
    return (
        <div>
            <button className="navbarBtn" type="button" onClick={handleClick}><BiHomeAlt size="24"/></button>
        </div>
    )
}
