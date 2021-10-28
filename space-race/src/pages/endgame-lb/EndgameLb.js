import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Button, Table } from 'react-bootstrap'
import NavbarGame from '../../components/NavBar/Navbar-game'
import NavbarNm from '../../components/NavBar/Navbar-nm'
import { UserContext } from '../../contexts'

export default function EndgameLb() {
    const [leaderboard, setLeaderboard] = useState(false)
    const [data, setData] = useState()
    const [players, setPlayers] = useState()
    const [isFetched, setIsFetched] = useState(false);
    const [winner, setWinner] = useState()

    const { users } = useContext(UserContext)

    const handleClick = () => {
        setWinner(players[0].username)
        setLeaderboard(true)
        console.log(users)
        updateWins()
        resetPoints()
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
        //setData(result.data)
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


    const resetPoints = async () => {
        let options = {
            headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem('token')
            }
        }

       let body = {}
        
       for (let i = 0; i< players.length; i++) {
           axios.patch(`https://quizappriamathusansam.herokuapp.com/users/${players[i]._id}/points/reset`, body, options)

        }
    }

    const updateWins = async () => {
        const userNem = localStorage.getItem("username")
        
        let options = {
            headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem('token')
            }
        }

       let body = {}
        
        
        if(userNem === players[0].username) {
            axios.patch(`https://quizappriamathusansam.herokuapp.com/users/${players[0]._id}/wins`,body, options)
            console.log("win patch happened")
        }
        
    }


    useEffect(async () => {
        await getData()
        
        
        //code to reset the points of all the players in the game 


    }, [])

    console.log("netlify why")


    return (
        <div>
            <NavbarNm/>
            <div className="d-flex justify-content-center mt-5 ">
            <Button hidden={leaderboard} onClick={handleClick} className="showResults">SHOW RESULTS</Button>
            </div>
            <div className="leaderboard d-flex flex-column"> 
            
            <h1 hidden={!leaderboard}>CONGRATS {winner} YOU WON!! </h1>
            <Table striped bordered condensed hover hidden={!leaderboard} className="pleaderboard">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {isFetched === true ? players.map((row, index) => (
                        <tr key={row.username + index}>
                            <td>{index + 1}</td>
                            <td>{row.username}</td>
                            <td>{row.points}</td>
                        </tr>
                    )): null}
                </tbody>
            </Table>
             
            </div>
        </div>
    )
}
