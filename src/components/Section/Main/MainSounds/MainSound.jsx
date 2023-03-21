import React, { useContext } from 'react';

import classes from './MainSound.module.scss';
import svg from '../../../../assets/svg/sprite.svg';

import { AudioContext } from '../../../../context/audio-context';

const MainSound = ({ imageSource, title, audioSource, id }) => {
  const { currentSoundId, isPlaying, playAudio, pauseAudio } = useContext(AudioContext);

  const playClickHandler = () => {
    if (isPlaying && id === currentSoundId) {
      pauseAudio();
    } else {
      playAudio(audioSource, id);
    }
  };
  return (
    <li className={classes['main__sound']}>
      <div
        className={`
        ${classes.box} ${isPlaying && id === currentSoundId ? classes.isPlaying : ''}
      `}>
        <img className={classes['box__img']} src={imageSource} alt={title} />

        <button onClick={playClickHandler} className={classes.box__playicon}>
          <svg>
            <use xlinkHref={`${svg}#icon-${isPlaying && id === currentSoundId ? 'pause' : 'play'}`}></use>
          </svg>
        </button>

        <button className={classes.box__hearticon}>
          <svg>
            <use xlinkHref={`${svg}#icon-heart`}></use>
          </svg>
        </button>

        <div className={`${classes.box__menu} ${isPlaying && id === currentSoundId ? '' : classes.hidden}`}>
          <div className={classes.box__icons}>
            <svg className={classes['icon__volume']}>
              <use xlinkHref={`${svg}#icon-volume-2`}></use>
            </svg>
          </div>
        </div>
      </div>

      <div className={classes['main__text']}>
        <h2 className={classes['main__title']}>{title}</h2>
        <p className={classes['main__author']}>by Valdemaras</p>
      </div>
    </li>
  );
};

export default React.memo(MainSound);
