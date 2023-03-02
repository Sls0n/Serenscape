import React from 'react';

import classes from './MainSound.module.scss';
import svg from '../../../../assets/svg/sprite.svg';

const MainSound = ({ src, text }) => {
  return (
    <li className={classes['main__sound']}>
      <div className={classes.box}>
        <div className={classes.play}>
          <svg className={classes['main__play-svg']}>
            <use xlinkHref={`${svg}#icon-play`}></use>
          </svg>
        </div>
        <div className={classes.text}>{text}</div>
      </div>
      <img className={classes['main__img']} src={src} alt={text} />
    </li>
  );
};

export default MainSound;
