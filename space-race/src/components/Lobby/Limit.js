import React from 'react'

const Limit = () => {
    const renderLimit = () => {
        const row = [];
        for (let i = 1; i < 3; i++) {
             row.push(<option value={i} key ={i}>{i}</option>);
        }
        return row
    }
    return (
        <div>
            <select name="limit">
                {renderLimit()}
            </select>
        </div>
    )
}

export default Limit
