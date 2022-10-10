import * as React from 'react'
import './Timer.css'

const Timer = () => {
    const [start, setStart] = React.useState(false)
    const [seconds, setSeconds] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);

    React.useEffect(() => {
        let interval = null;
        if (start) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [start])
    

    React.useEffect(() => {
        if (seconds === 60) {
            setMinutes(prevMinutes => prevMinutes + 1);
            setSeconds(0);
        }
    }, [seconds])  
    

    const startTimer = () => {
        setStart(true)
    }
    
    const stopTimer = () => {
        setStart(!start)
    }
    
    const resetTimer = () => {
        setSeconds(0)
        setMinutes(0)
        setStart(false)
    }

    return (
    <div className="container">
      <div className='column'>
      <h1>Timer</h1>
      <span> {minutes} mins </span>
      <span>{seconds} Seconds</span>
      </div>
      <div className='buttons'>
        <button onClick={() => startTimer()}>Start</button>
        <button onClick={() => stopTimer()}>{ start ? 'Stop' : 'Resume' }</button>
        <button onClick={() => resetTimer()}>Reset</button>
      </div>
    </div>
  )
}

export default Timer