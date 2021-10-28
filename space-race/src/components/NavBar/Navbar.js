import React from 'react'
import Logoutbtn from '../LogoutBtn/Logoutbtn'

import '../../App.css';
import BackButton from '../BackButton/BackButton';


export default function NavbarMain() {
    return (
        <nav className="main-header">
            <button value="back" id="backButton">Back</button>
            <h1 >SPACE RACE</h1>
            <Logoutbtn />
        </nav>
    )
}
