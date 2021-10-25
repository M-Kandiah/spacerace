import React from 'react'

const Rounds = () => {
    const renderRounds = () => {
        const row = [];
        for (let i = 1; i < 11; i++) {
             row.push(<option value={i} key ={i}>{i}</option>);
        }
        return row
    }
    return (
        <div>
            <select name="rounds">
                {renderRounds()}
            </select>
        </div>
    )
}

export default Rounds
