import React from 'react';

import classes from './Timer.module.scss';

const Timer = () => {
  return (
    <>
      <div className={classes['container']}>
        <div className={classes.timer}>
          <div className={classes['timer__hour']}>
            <span>Hour</span>
            <input type="number" min="0" max="24" />
          </div>
          <div className={classes['timer__minute']}>
            <span>Minute</span>
            <input type="number" min="0" max="60" />
          </div>
        </div>
        <button className={classes['timer__button']}>Start</button>
      </div>
    </>
  );
};

export default Timer;
