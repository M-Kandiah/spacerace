import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavbarNm from '../../components/NavBar/Navbar-nm';
import CircleTimer from '../../components/Circletimer/CircleTimer';






export default function Game() {
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
        const result = await axios('https://opentdb.com/api.php?amount=1&type=multiple',);
        setData(result.data)
        let answers = []
        answers.push(result.data.results[0].correct_answer, result.data.results[0].incorrect_answers[0], result.data.results[0].incorrect_answers[1], result.data.results[0].incorrect_answers[2])
        // console.log(answers)
        answers.sort(func)
        setAnswers(answers)

        let correctAnswer = result.data.results[0].correct_answer
        console.log(correctAnswer)
        setCorrectAnswer(correctAnswer)

        let question
        question = result.data.results[0].question
        // console.log(question)
        question = question.replace(/&amp;/g, "&").replace(/&#039;/g, "").replace(/&quot;/g, "''").replace(/&eacute;/g, "é")
        // console.log(question)
        setQuestion(question)


        setIsFetched(true)
    }


    useEffect(async () => {
        boi()
    }, [])

    // console.log(data)
    // console.log(answers)

    const handleClick = (e) => {
        e.preventDefault()
        console.log(e)
        if (e.target.textContent === correctAnswer) {
            
            e.target.classList.add('bg-success')
        } else {
            
            e.target.classList.add('bg-danger')
        }

    }



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
