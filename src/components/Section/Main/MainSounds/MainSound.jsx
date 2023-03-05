import React from 'react';

import classes from './MainSound.module.scss';
import svg from '../../../../assets/svg/sprite.svg';

const MainSound = ({ src, text }) => {
  return (
    <li className={classes['main__sound']}>
      <img className={classes['main__img']} src={src} alt={text} />

      <div className={classes.heart}>
        <svg>
          <use xlinkHref={`${svg}#icon-heart`}></use>
        </svg>
      </div>

      <div className={classes.box}>
        <div className={classes.icon}>
          <figcaption className={classes.text}>{text}</figcaption>

          <svg className={classes['icon__heart']}>
            <use xlinkHref={`${svg}#icon-volume-2`}></use>
          </svg>
        </div>
      </div>
    </li>
  );
};

export default MainSound;
