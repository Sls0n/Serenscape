import React from 'react';
import classes from './HeaderDown.module.scss';

const HeaderDown = () => {
  return (
    <div className={classes['header__down']}>
      <button className={classes['header__down-btn']}>All</button>
      <button className={classes['header__down-btn']}>Ocean</button>
      <button className={classes['header__down-btn']}>Birds</button>
      <button className={classes['header__down-btn']}>Rain</button>
      <button className={classes['header__down-btn']}>Sunset</button>
      <button className={classes['header__down-btn']}>Wind</button>
      <button className={classes['header__down-btn']}>Thunder</button>
      <button className={classes['header__down-btn']}>Waterfall</button>
      <button className={classes['header__down-btn']}>Cave</button>
      <button className={classes['header__down-btn']}>Fire</button>
      <button className={classes['header__down-btn']}>Forest</button>
      <button className={`${classes['header__down-btn']} ${classes['header__down-btn--last']}`}>Storm</button>{' '}
    </div>
  );
};

export default HeaderDown;
