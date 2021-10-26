import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

export class Winsleaderboard extends Component {

    state = {
        wins: []
    }
    
    options = {
        headers: {
            'Content-Type': 'application/json',
            "authorization": localStorage.getItem('token')
        }
    }

    getData(url, stateName) {
        axios.get(url, this.options)
        .then(({data}) => {
            data.sort(function(a,b) {
                return b.wins - a.wins
            })
            this.setState({[stateName]: data});
            console.log(data)
            
        })
    }

    componentDidMount(){
        this.getData('https://quizappriamathusansam.herokuapp.com/users', "wins"); 
    }

 
    render() {
        const {wins} = this.state
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wins.map((row,index)=>(
                            <tr key={row.username}>
                                <td>{index+1}</td>
                                <td>{row.username}</td>
                                <td>{row.wins}</td>
                            </tr>
                        ))}
                    </tbody>

                </Table>
            </div>
        )
    }
}

export default Winsleaderboard
