import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Button, Table } from 'react-bootstrap'
import NavbarGame from '../../components/NavBar/Navbar-game'
import { UserContext } from '../../contexts'

export default function EndgameLb() {
    const [leaderboard, setLeaderboard] = useState(false)
    const [points, setPoints] = useState([])
    const [players, setPlayers] = useState()
    const [isFetched, setIsFetched] = useState(false);

    const { users } = useContext(UserContext)

    const handleClick = () => {
        setLeaderboard(true)
        console.log(users)

    }

    const options = {
        headers: {
            'Content-Type': 'application/json',
            "authorization": localStorage.getItem('token')
        }
    }

    
    
    
    async function getData() {
        const result = await axios('https://quizappriamathusansam.herokuapp.com/users', options)
        console.log(result.data[0].username)
        let v = []

        for (let i = 0; i < result.data.length; i++) {
            if (users.includes(result.data[i].username) && !v.includes(result.data[i])) {
                v.push(result.data[i])

            }
        }
        
        
        console.log('below is v')
        console.log(v)
        console.log('above is v')
        v.sort(function(a,b) {
            return b.points - a.points
        })
        setPlayers(v)
        setIsFetched(true)
    }

    const updateWins = async () => {
        
    }


    useEffect(() => {
        getData()

    }, [])




    return (
        <div>
            <NavbarGame/>
            <Button hidden={leaderboard} onClick={handleClick}>SHOW RESULTS</Button>
            <Table hidden={!leaderboard}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {isFetched === true ? players.map((row, index) => (
                        <tr key={row.username + ":)"}>
                            <td>{index + 1}</td>
                            <td>{row.username}</td>
                            <td>{row.points}</td>
                        </tr>
                    )): null}
                </tbody>
            </Table>
        </div>
    )
}
