import React, { useContext } from 'react';
import { useTimer } from 'react-timer-hook';
import { AudioContext } from '../../context/audio-context';
import TimerContext from '../../context/timer-context';

import classes from './TimerForm.module.scss';

import Notification from '../Notification/Notification';
import useNotification from '../../hooks/useNotification';

const TimerForm = () => {
  const { hour, minute, setHour, setMinute, time, setTime, isRunning, setIsRunning } = useContext(TimerContext);
  const { isPlaying, pauseAudio } = useContext(AudioContext);

  const { state, renderNotification, removeNotification } = useNotification();

  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp: time,

    onExpire: () => {
      console.warn('Timer ended, onExpire called');
      setIsRunning(false);
      renderNotification('Timer is completed!', 'default');

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
      renderNotification('Please enter a valid time!', 'error');
      return;
    }

    const now = new Date();
    now.setHours(now.getHours() + hour);
    now.setMinutes(now.getMinutes() + minute);
    setTime(now);
    setIsRunning(true);
    restart(now);

    renderNotification('Timer started!', 'default');

    setHour('');
    setMinute('');
  };

  const resetHandler = () => {
    setIsRunning(false);
    setTime(0);
    setHour('');
    setMinute('');
    restart(new Date(0, 0, 0, 0, 0, 0, 0));
    renderNotification('Reset timer!', 'default');
  };

  return (
    <>
      <Notification
        open={state.showNotification}
        closeFn={removeNotification}
        message={state.notificationMessage}
        status={state.notificationStatus}
      />
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
        <div style={{ textAlign: 'center' }}>
          <div className={classes.span} style={{ fontSize: '100px' }}>
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
