import React from 'react'
import CreateRoom from '../../components/createRoomBtn/CreateRoom'
import JoinRoom from '../../components/JoinRoomBtn/JoinRoom'
import Leaderboard from '../../components/leaderboardbtn/Leaderboard'
import NavbarMain from '../../components/NavBar/Navbar'
import Username from '../../components/Username/Username'
import '../../App.css';

export default function Mainmenu() {
    
    return (
        <section >
            <NavbarMain/> 
            <Username/>
         <div className="mainMenuBtnHolder">
            
            <CreateRoom className="mainMenuBtnd"/> 
            <JoinRoom className="mainMenuBtnd"/>
            <Leaderboard className="mainMenuBtnd"/>
            </div>
        </section>
    )
}

