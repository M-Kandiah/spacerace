import React from 'react'
import BackButton from '../BackButton/BackButton'
import Mainmenubtn from '../MainMenuBtn/Mainmenubtn'
import '../../App.css';

export default function NavbarNm() {
    return (
        <nav className="main-header">
            <BackButton/>
            <h1>SPACE RACE</h1>
            <Mainmenubtn/>
        </nav>
    )
}
