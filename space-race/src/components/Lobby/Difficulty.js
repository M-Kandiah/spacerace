import React from 'react'
import '../../App.css';

const Difficulty = () => {
    return (
        <div>
            <select name="difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
    )
}

export default Difficulty
