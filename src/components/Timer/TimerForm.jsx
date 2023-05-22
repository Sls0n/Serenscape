import React, { useState, useRef, useContext, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { AudioContext } from '../../context/audio-context';
import TimerContext from '../../context/timer-context';

import classes from './TimerForm.module.scss';

const TimerForm = () => {
  const { hour, minute, shouldStart, setHour, setMinute, setShouldStart, time, setTime } = useContext(TimerContext);
  const { isPlaying, pauseAudio } = useContext(AudioContext);

  const hourChangeHandler = (e) => {
    setHour(+e.target.value);
  };

  const minuteChangeHandler = (e) => {
    setMinute(+e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setShouldStart(true);

    console.log(hour, minute);
    setTime(new Date().setSeconds(new Date().getSeconds() + hour * 3600 + minute * 60));
  };

  const { seconds, minutes, hours, isRunning, start, restart } = useTimer({
    expiryTimestamp: time,
    onExpire: () => {
      console.warn('onExpire called');
      if (isPlaying) {
        pauseAudio();
      }
    },
  });

  return (
    <>
      <div className={classes['container']}>
        <form onSubmit={submitHandler} className={classes.timer}>
          <div className={classes['form-container']}>
            <div className={classes['timer__hour']}>
              <span>Hour</span>
              <input type="number" min="0" max="24" onChange={hourChangeHandler} />
            </div>
            <div className={classes['timer__minute']}>
              <span>Minute</span>
              <input type="number" min="0" max="60" onChange={minuteChangeHandler} />
            </div>
          </div>
          <button className={classes['timer__button']}>Submit</button>
        </form>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '100px' }}>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
          </div>
          <p>{isRunning ? 'Running' : 'Not running'}</p>
        </div>
      </div>
    </>
  );
};

export default TimerForm;
