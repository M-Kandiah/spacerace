import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import NavbarNm from '../../components/NavBar/Navbar-nm';
import CircleTimer from '../../components/Circletimer/CircleTimer';
import {UserContext} from '../../contexts'
import { socket } from '../../App';





export default function Game() {
    const {room} = useContext(UserContext)
    const [data, setData] = useState()
    const [answers, setAnswers] = useState()
    const [isFetched, setIsFetched] = useState(false);
    const [question, setQuestion] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [correct, setCorrect] = useState('')

    function func(a, b) {
        return 0.5 - Math.random();
    }

    async function boi() {
        console.log(room)
        const result = await axios(`https://opentdb.com/api.php?amount=${parseInt(room.rounds)*5}&category=${parseInt(room.category)}&difficulty=${room.difficulty}&type=multiple`);
        setData(result.data)
        console.log(data)
        console.log(result)
        for(let i=0; i<result.data.results.length; i++) {
            let answers = []
            answers.push(result.data.results[i].correct_answer, result.data.results[i].incorrect_answers[0], result.data.result[i].incorrect_answers[1], result.data.results[i].incorrect_answers[2])
            // console.log(answers)
            answers.sort(func)
            setAnswers(answers)
    
            let correctAnswer = result.data.results[i].correct_answer
            console.log(correctAnswer)
            setCorrectAnswer(correctAnswer)
    
            let question
            question = result.data.results[i].question
            // console.log(question)
            question = question.replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é")
            // console.log(question)
            setQuestion(question)
    
            socket.emit('sendData', question,answers,correctAnswer)
    
            setIsFetched(true)

        }
    }


    useEffect(async () => {
        boi()
    }, [])

    // console.log(data)
    // console.log(answers)


    let options = {
        headers: {
            'Content-Type': 'application/json',
            "authorization": localStorage.getItem('token')
        }          
    }

    let bodyCorrect = {
       
            "points": 500
        
    }

    let bodyWrong = {
        "points": -250
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const id = localStorage.getItem("userId")
        console.log(e)
        if (e.target.textContent === correctAnswer) {
            e.target.classList.add('bg-success')
            console.log( localStorage.getItem('token'))
            await axios.patch(`https://quizappriamathusansam.herokuapp.com/users/${id}/points`, bodyCorrect, options) // hardcoded for user big boy sam, get user ID in auth context and put it in local storage and then use ${localStorage.getItem(userID)}
            console.log('success?')
        } else {
            await axios.patch(`https://quizappriamathusansam.herokuapp.com/users/${id}/points`, bodyWrong, options) // hardcoded for user big boy sam, get user ID in auth context and put it in local storage and then use ${localStorage.getItem(userID)}
            e.target.classList.add('bg-danger')
        }

    }

    socket.on('sent', (question,answers,correctAnswer) =>{
        setQuestion(question)
        setAnswers(answers)
        setCorrectAnswer(correctAnswer)
    })

    return (
        <>
            <NavbarNm/>
            <p id='question'>{isFetched ? question : null}</p>
            <div className="d-flex flex-row flex-wrap">
                <button id="answer1" onClick={handleClick} className="w-50">{isFetched ? answers[0] : null}</button>
                <button id="answer2" onClick={handleClick} className="w-50">{isFetched ? answers[1] : null}</button>
                <button id="answer3" onClick={handleClick} className="w-50">{isFetched ? answers[2] : null}</button>
                <button id="answer4" onClick={handleClick} className="w-50">{isFetched ? answers[3] : null}</button>
            </div>
            {isFetched ? <CircleTimer/>: null}
        </>
    )
}
