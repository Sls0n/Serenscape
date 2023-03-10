import React, { useState } from 'react';

import classes from './MainSound.module.scss';
import svg from '../../../../assets/svg/sprite.svg';

const MainSound = ({ imageSource, title, audioSource }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audio = React.useRef(new Audio(audioSource));

  const playClickHandler = () => {
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }

    audio.current.onended = () => setIsPlaying(false);

    setIsPlaying((prevState) => !prevState);
  };

  return (
    <li className={classes['main__sound']}>
      <div
        className={`
        ${classes.box} ${isPlaying ? classes.isPlaying : ''}
      `}>
        <img className={classes['box__img']} src={imageSource} alt={title} />

        <button onClick={playClickHandler} className={classes.box__playicon}>
          <svg>
            <use xlinkHref={`${svg}#icon-${isPlaying ? 'pause' : 'play'}`}></use>
          </svg>
        </button>

        <button className={classes.box__hearticon}>
          <svg>
            <use xlinkHref={`${svg}#icon-heart`}></use>
          </svg>
        </button>

        <div className={`${classes.box__menu} ${isPlaying ? '' : classes.hidden}`}>
          <div className={classes.box__icons}>
            <svg className={classes['icon__volume']}>
              <use xlinkHref={`${svg}#icon-volume-2`}></use>
            </svg>
          </div>
        </div>
      </div>

      <div className={classes['main__text']}>
        <h3 className={classes['main__title']}>{title}</h3>
        <p className={classes['main__author']}>by Valdemaras</p>
      </div>
    </li>
  );
};

export default MainSound;
