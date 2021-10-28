import React, { useEffect, useState, useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import NavbarNm from '../../components/NavBar/Navbar-nm';
import CircleTimer from '../../components/Circletimer/CircleTimer';
import { UserContext } from '../../contexts'
import { socket } from '../../App';
import NavbarGame from '../../components/NavBar/Navbar-game';
export default function Game() {
    const history = useHistory()
    const { room } = useContext(UserContext)
    const [data, setData] = useState()
    const [answers, setAnswers] = useState()
    const [isFetched, setIsFetched] = useState(false);
    const [question, setQuestion] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [correct, setCorrect] = useState('')
    let [qCounter, setQCounter] = useState(0)
    let [pointCounter, setPointCounter] = useState(10)
    let [disabled, setDisabled] = useState(false)

    function func(a, b) {
        return 0.5 - Math.random();
    }

    useEffect(() =>
        setTimeout(() => {setQCounter(1)
            if (disabled === false) {
                const id = localStorage.getItem("userId")
               
                let options = {
                    headers: {
                        'Content-Type': 'application/json',
                        "authorization": localStorage.getItem('token')
                    }
                }
            
                let bodyWrong = {
                    "points": -20
                }
                axios.patch(`https://quizappriamathusansam.herokuapp.com/users/${id}/points`, bodyWrong, options)
            }}, 10000), [])


    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);
        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);

    }


    useInterval(() => {
        // Your custom logic here
        console.log(qCounter)
        if (qCounter === data.results.length) {
            return history.push(`/results`)
        }

        setQCounter(qCounter => qCounter + 1);
        let newAnswers = []
        newAnswers.push(data.results[qCounter].correct_answer.replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é"), data.results[qCounter].incorrect_answers[0].replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é"), data.results[qCounter].incorrect_answers[1].replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é"), data.results[qCounter].incorrect_answers[2].replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é"))
        newAnswers.sort(func)
        setAnswers(newAnswers)



        let newCorrectAnswer = data.results[qCounter].correct_answer.replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é")
        setCorrectAnswer(newCorrectAnswer)
        console.log(newCorrectAnswer)
        let newQuestion = data.results[qCounter].question
        newQuestion = newQuestion.replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é")
        setQuestion(newQuestion)
        socket.on('sent', (question, answers, correctAnswer) => {
            setQuestion(question)
            setAnswers(answers)
            setCorrectAnswer(correctAnswer)
        })
        if (disabled === false) {
            const id = localStorage.getItem("userId")
           
            let options = {
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": localStorage.getItem('token')
                }
            }
        
            let bodyWrong = {
                "points": -20
            }
            axios.patch(`https://quizappriamathusansam.herokuapp.com/users/${id}/points`, bodyWrong, options)
        }
        setPointCounter(10)
        setDisabled(false)
    }, 10100);




    async function boi() {
        // console.log(room)
        const result = await axios(`https://opentdb.com/api.php?amount=${parseInt(room.rounds) * 5}&category=${parseInt(room.category)}&difficulty=${room.difficulty}&type=multiple`);
        console.log(result.data)
        setData(result.data)
        // console.log(data)
        // console.log(result)
        let answers = []
        answers.push(result.data.results[qCounter].correct_answer.replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é"), result.data.results[qCounter].incorrect_answers[0].replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é"), result.data.results[qCounter].incorrect_answers[1].replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é"), result.data.results[qCounter].incorrect_answers[2].replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é"))
        answers.sort(func)
        setAnswers(answers)
        let correctAnswer = result.data.results[0].correct_answer.replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é")
        console.log(correctAnswer)
        setCorrectAnswer(correctAnswer)
        let question
        question = result.data.results[qCounter].question
        // console.log(question)
        question = question.replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é")
        // console.log(question)
        setQuestion(question)
        socket.emit('sendData', question, answers, correctAnswer)



        setIsFetched(true)
    }



    useEffect(async () => {
        boi()
    }, [])


    useInterval(() => {
        setPointCounter(pointCounter - 1)
        console.log(pointCounter)


    }, 1000)



    let options = {
        headers: {
            'Content-Type': 'application/json',
            "authorization": localStorage.getItem('token')
        }
    }


    let bodyCorrect = {

        "points": 10 * pointCounter

    }
    let bodyWrong = {
        "points": -20
    }
    const handleClick = async (e) => {
        e.preventDefault()
        const id = localStorage.getItem("userId")
        console.log(e)
        if (e.target.textContent.replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é") === correctAnswer) {
            e.target.classList.add('bg-success')
            console.log(localStorage.getItem('token'))
            await axios.patch(`https://quizappriamathusansam.herokuapp.com/users/${id}/points`, bodyCorrect, options) // hardcoded for user big boy sam, get user ID in auth context and put it in local storage and then use ${localStorage.getItem(userID)}
            console.log('success?')
            setDisabled(true)

        } else {
            await axios.patch(`https://quizappriamathusansam.herokuapp.com/users/${id}/points`, bodyWrong, options) // hardcoded for user big boy sam, get user ID in auth context and put it in local storage and then use ${localStorage.getItem(userID)}
            e.target.classList.add('bg-danger')
            setDisabled(true)
        }
    }
    socket.on('sent', (question, answers, correctAnswer) => {
        setQuestion(question)
        setAnswers(answers)
        setCorrectAnswer(correctAnswer)
    })


    return (
        <>
            <NavbarGame />
            <p id='question'>{isFetched ? question : null}</p>
            <div className="d-flex flex-row flex-wrap">
                <button key={qCounter + 111} id="answer1" onClick={handleClick} className="w-50" disabled={disabled}>{isFetched ? answers[0] : null}</button>
                <button key={qCounter + 222} id="answer2" onClick={handleClick} className="w-50" disabled={disabled}>{isFetched ? answers[1] : null}</button>
                <button key={qCounter + 333} id="answer3" onClick={handleClick} className="w-50" disabled={disabled}>{isFetched ? answers[2] : null}</button>
                <button key={qCounter + 444} id="answer4" onClick={handleClick} className="w-50" disabled={disabled}>{isFetched ? answers[3] : null}</button>
            </div>
            {isFetched ? <CircleTimer key={qCounter} /> : null}
        </>
    )
}