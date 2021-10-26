import React, { useContext } from 'react'
import Category from '../../components/Lobby/Category';
import Difficulty from '../../components/Lobby/Difficulty';
import Limit from '../../components/Lobby/Limit';
import Rounds from '../../components/Lobby/Rounds';
import { UserContext } from '../../contexts';
import { category } from '../../categoryList'
import NavbarNm from '../../components/NavBar/Navbar-nm';

const Quiz = () => {
    const {room, setRoom, setLobby} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        setRoom({
            category: category[e.target[2].selectedIndex].id,
            difficulty: e.target[3].value,
            rounds: e.target[4].value,
            limit: e.target[5].value
        });
        console.log(room)
        setLobby('host')
    };
    // const url = `https://opentdb.com/api.php?amount=${amt}&category=${category}&difficulty=${difficulty}&type=multiple`;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <NavbarNm />
                <Category />
                <Difficulty />
                <Rounds />
                <Limit />
                <input type="submit" value="Create"></input>
            </form>
        </div>
    )
}

export default Quiz;
