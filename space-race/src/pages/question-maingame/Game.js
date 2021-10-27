import React, { useEffect, useState, useContext, useRef } from 'react'
import axios from 'axios'
import NavbarNm from '../../components/NavBar/Navbar-nm';
import CircleTimer from '../../components/Circletimer/CircleTimer';
import { UserContext } from '../../contexts'
import { socket } from '../../App';





export default function Game() {
    const { room } = useContext(UserContext)
    const [data, setData] = useState()
    const [answers, setAnswers] = useState()
    const [isFetched, setIsFetched] = useState(false);
    const [question, setQuestion] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [correct, setCorrect] = useState('')
    let [qCounter, setQCounter] = useState(0)

    function func(a, b) {
        return 0.5 - Math.random();
    }



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
        setQCounter(qCounter + 1);
        let newAnswers = []
        newAnswers.push(data.results[qCounter].correct_answer, data.results[qCounter].incorrect_answers[0], data.results[qCounter].incorrect_answers[1], data.results[qCounter].incorrect_answers[2])
        setAnswers(newAnswers)

        let newCorrectAnswer = data.results[qCounter].correct_answer
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
    }, 10100);

    async function boi() {
        // console.log(room)
        const result = await axios(`https://opentdb.com/api.php?amount=${parseInt(room.rounds) * 5}&category=${parseInt(room.category)}&difficulty=${room.difficulty}&type=multiple`);
        console.log(result.data)
        setData(result.data)
<<<<<<< HEAD
        // console.log(data)
        // console.log(result)

    
        let answers = []
        answers.push(result.data.results[qCounter].correct_answer, result.data.results[qCounter].incorrect_answers[0], result.data.results[qCounter].incorrect_answers[1], result.data.results[qCounter].incorrect_answers[2])

        answers.sort(func)
        setAnswers(answers)

        let correctAnswer = result.data.results[0].correct_answer
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
=======
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
>>>>>>> 332df68f1557d93f26cedcacf14ff1ab3ea9ecec
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

    socket.on('sent', (question, answers, correctAnswer) => {
        setQuestion(question)
        setAnswers(answers)
        setCorrectAnswer(correctAnswer)
    })

   
    return (
        <>
            <NavbarNm />
            <p id='question'>{isFetched ? question : null}</p>
            <div className="d-flex flex-row flex-wrap">
                <button key={qCounter +111} id="answer1" onClick={handleClick} className="w-50">{isFetched ? answers[0] : null}</button>
                <button key={qCounter +222} id="answer2" onClick={handleClick} className="w-50">{isFetched ? answers[1] : null}</button>
                <button key={qCounter +333} id="answer3" onClick={handleClick} className="w-50">{isFetched ? answers[2] : null}</button>
                <button key={qCounter +444} id="answer4" onClick={handleClick} className="w-50">{isFetched ? answers[3] : null}</button>
            </div>
            {isFetched ? <CircleTimer key={qCounter}/> : null}
        </>
    )
}
