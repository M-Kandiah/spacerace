import React from 'react'
import { useHistory } from 'react-router-dom'
import '../../App.css';
export default function BackButton() {
    let history = useHistory()
    return (
        <div>
            <button id="back"className="navbarBtn" type="button" onClick={()=> history.goBack()}>Back</button>
        </div>
    )
}
