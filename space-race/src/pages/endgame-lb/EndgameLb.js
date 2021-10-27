import React, {useState, useEffect} from 'react'
import {Button, Table} from 'react-bootstrap'
import NavbarNm from '../../components/NavBar/Navbar-nm'

export default function EndgameLb() {
    const [leaderboard, setLeaderboard] = useState(false)
    
    const handleClick = () => {
        setLeaderboard(true)

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
