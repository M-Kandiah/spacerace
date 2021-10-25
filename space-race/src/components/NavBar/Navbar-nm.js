import React from 'react'
import BackButton from '../BackButton/BackButton'
import Mainmenubtn from '../MainMenuBtn/Mainmenubtn'

export default function NavbarNm() {
    return (
        <div className="main-header">
            <BackButton/>
            <h1>SPACE RACE</h1>
            <Mainmenubtn/>
        </div>
    )
}
