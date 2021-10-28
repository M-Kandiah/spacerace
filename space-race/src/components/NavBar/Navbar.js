import React from 'react'
import Logoutbtn from '../LogoutBtn/Logoutbtn'
import '../../App.css';
import BackButton from '../BackButton/BackButton';


export default function NavbarMain() {
    return (
        <nav className="main-header">
            <button value="back" id="backButton" disabled>Back</button>
            <h1 className="title">BRAINIFY</h1>
            <Logoutbtn />
        </nav>
    )
}
