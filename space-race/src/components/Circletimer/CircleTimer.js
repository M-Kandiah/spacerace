import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function CircleTimer() {
    return (
        <div>
            <CountdownCircleTimer
    isPlaying
    id ="timer"
    size = "80"
    strokeWidth ="8"
    duration={10}
    colors={[
      ['#2bc451', 0.33],
      ['#bfba13', 0.33],
      ['#ba0606', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
        </div>
    )
}
