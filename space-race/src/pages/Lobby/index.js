import React, {useContext} from 'react'
import Category from '../../components/Lobby/Category';
import Difficulty from '../../components/Lobby/Difficulty';
import Limit from '../../components/Lobby/Limit';
import Rounds from '../../components/Lobby/Rounds';
import {UserContext} from '../../contexts';
import {category} from '../../categoryList'

const Quiz = () => {
    const {room, setRoom} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setRoom({
            category: category[e.target[0].selectedIndex].id,
            difficulty: e.target[1].value,
            rounds: e.target[2].value,
            limit: e.target[3].value
        });
        console.log(room)
    };
    // const url = `https://opentdb.com/api.php?amount=${amt}&category=${category}&difficulty=${difficulty}&type=multiple`;
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <Category/>
            <Difficulty/>
            <Rounds/>
            <Limit/>
            <input type="submit" value="Create"></input>
            </form>
        </div>
    )
}

export default Quiz;
