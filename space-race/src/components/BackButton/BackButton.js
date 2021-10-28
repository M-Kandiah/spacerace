import React from 'react'
import { useHistory } from 'react-router-dom'
import '../../App.css';
import { BiArrowBack} from "react-icons/bi"
export default function BackButton() {
    let history = useHistory()
    return (
        <div>
            <button id="back" className="navbarBtn" type="button" onClick={()=> history.goBack()}><BiArrowBack size="24"/></button>
        </div>
    )
}
