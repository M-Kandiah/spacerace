import React, {useState, useEffect, useContext} from 'react'
import {Button, Table} from 'react-bootstrap'
import NavbarNm from '../../components/NavBar/Navbar-nm'
import { UserContext } from '../../contexts'

export default function EndgameLb() {
    const [leaderboard, setLeaderboard] = useState(false)
    
    const {users} = useContext(UserContext)
    
    const handleClick = () => {
        setLeaderboard(true)
        console.log(users)

    }

    return (
        <div>
            <NavbarNm/>
            <Button hidden={leaderboard} onClick={handleClick}>SHOW RESULTS</Button>
            <Table hidden={!leaderboard}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Points</th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}
