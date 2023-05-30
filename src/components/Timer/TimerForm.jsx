import React, { useContext } from 'react';
import { useTimer } from 'react-timer-hook';
import { AudioContext } from '../../context/audio-context';
import TimerContext from '../../context/timer-context';

import classes from './TimerForm.module.scss';

const TimerForm = () => {
  const { hour, minute, setHour, setMinute, start, time, setTime, isRunning, setIsRunning } = useContext(TimerContext);
  const { isPlaying, pauseAudio } = useContext(AudioContext);

  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp: time,

    onExpire: () => {
      console.warn('Timer ended, onExpire called');
      setIsRunning(false);

      if (isPlaying) {
        pauseAudio();
      }
    },
  });

  const hourChangeHandler = (e) => {
    setHour(+e.target.value);
  };

  const minuteChangeHandler = (e) => {
    setMinute(+e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (hour === '' && minute === '') {
      return;
    }

    const now = new Date();
    now.setHours(now.getHours() + hour);
    now.setMinutes(now.getMinutes() + minute);
    setTime(now);
    setIsRunning(true);
    restart(now);

    setHour('');
    setMinute('');
  };

  const resetHandler = () => {
    setIsRunning(false);
    setTime(0);
    setHour('');
    setMinute('');
    restart(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  return (
    <>
      <div className={classes['container']}>
        <form onSubmit={submitHandler} className={classes.timer}>
          <div className={classes['form-container']}>
            <div className={classes['timer__hour']}>
              <span>Hour</span>
              <input type="number" min="0" max="24" value={hour} onChange={hourChangeHandler} />
            </div>
            <div className={classes['timer__minute']}>
              <span>Minute</span>
              <input type="number" min="0" max="60" value={minute} onChange={minuteChangeHandler} />
            </div>
          </div>
        </form>
        <div style={{ textAlign: 'center', color: '#aaa' }}>
          <div style={{ fontSize: '100px', color: '#ccc' }}>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
          </div>
        </div>
        <div className={classes['timer__button']}>
          <button
            style={{
              opacity: isRunning ? '0.5' : '1',
              pointerEvents: isRunning ? 'none' : 'auto',
            }}
            onClick={submitHandler}
            className={classes['timer__button-1']}>
            Start
          </button>
          <button onClick={resetHandler} className={classes['timer__button-2']}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default TimerForm;
