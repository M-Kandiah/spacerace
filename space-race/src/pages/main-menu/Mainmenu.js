import React from 'react'
import CreateRoom from '../../components/createRoomBtn/CreateRoom'
import JoinRoom from '../../components/JoinRoomBtn/JoinRoom'
import Leaderboard from '../../components/leaderboardbtn/Leaderboard'
import NavbarMain from '../../components/NavBar/Navbar'

export default function Mainmenu() {
    
    return (
        <div>
            <NavbarMain/> 
            <CreateRoom/> 
            <JoinRoom/>
            <Leaderboard/>
        </div>
    )
}

