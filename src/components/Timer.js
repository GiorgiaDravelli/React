import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from "react";
import {BsPlayCircle, BsStopCircle, BsPauseCircle} from 'react-icons/bs'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { AudioPlayer } from './AudioPlayer';

export const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState("0" + 0);
  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(0);


  useEffect(() => {
    let interval;
    if(isRunning) {
      interval = setInterval(() => {
        if (seconds < 10 && seconds != 0) {                     
          setSeconds((prevSeconds) => "0" + (prevSeconds - 1));
      } else if (seconds > 9){
          setSeconds((prevSeconds) => (prevSeconds - 1));
      } else if (minutes > 0) {
          setMinutes(prevMinutes => prevMinutes - 1);
          setSeconds(59);
      }
      }, 1000);
    } else if (minutes === 0 && seconds === 0) {
      setIsRunning(false);
      setSeconds(0);
      setMinutes(0);
    }else {
      setIsRunning(false)
    }
    
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const changeTimer = (e) => {
    setIsRunning(false);
    setSeconds(prevSeconds => {
      prevSeconds = e.target.getAttribute("value")
      return (
        `${Math.floor(prevSeconds % 60) + "0"}`
      )
    });
    setMinutes(prevMinutes => {
      prevMinutes = e.target.getAttribute("value")
      return (
          `${Math.floor(prevMinutes / 60)}`
      )
    });
    setDuration(duration => {                           
      duration = e.target.getAttribute("value")
      return (
          `${duration}`
      )
    })
  }

  const startTimer = () => {
    if (minutes !== 0 || seconds !== 0) {
      setIsRunning(true);
    } else {
      alert("Choose a time for your meditation");
    }
  }

  const stopTimer = () => {
    setIsRunning(false);
    setMinutes(0);
    setSeconds('0' + 0);
    setDuration(0);
  }

  const pauseTimer = () => {
    setIsRunning(false);
  }

  const TimeSelect = () => {
  
    return (
      <div>
        <button value={300} onClick={changeTimer} type="button" className=" time-btn btn btn-outline-dark">
        5 minutes
        </button>
        <button value={600} onClick={changeTimer} type="button" className="time-btn btn btn-outline-dark">
          10 minutes
        </button>
        <button value={900} onClick={changeTimer} type="button" className="btn btn-outline-dark">
          15 minutes
        </button>
      </div>
    )
  }


  return (
    <main className='timer-container'>
      <div className='timer'>
       <CountdownCircleTimer
          key={duration}
          isPlaying={isRunning ? true : false}
          duration={duration}
          size={250}
          colors={['#368136', '#0f650f', '#1c741c', '#368136']}
          colorsTime={[7, 5, 2, 0]}
          onComplete={stopTimer}
        >
          {({ duration }) => {
            return <div className='display-time'>
              <span>{minutes}</span>
              <span> : </span>
              <span>{seconds}</span>
            </div>
          }}
        </CountdownCircleTimer>
       
        <div className='buttons-container'>
          <button type="button" onClick= {isRunning ? pauseTimer : startTimer}  className=" pause-btn btn btn-outline-dark">
          {isRunning ? <BsPauseCircle/> : <BsPlayCircle/>}
          <span> {isRunning ? 'Pause' : 'Start'}</span>
          </button>
          <button type="button" onClick= {stopTimer} className="btn btn-outline-dark">
            <BsStopCircle/> Stop
          </button>
        </div>
        <div className='time-select-container'>
          <TimeSelect/>
        </div>
      </div>
      <div className='audio-buttons-container'>
          <AudioPlayer/>
      </div>
    </main>
  )
}
