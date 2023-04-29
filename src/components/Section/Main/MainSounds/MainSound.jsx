import React, { useContext } from 'react';

import classes from './MainSound.module.scss';
import svg from '../../../../assets/svg/sprite.svg';

import { AudioContext } from '../../../../context/audio-context';
import { Link } from 'react-router-dom';

const MainSound = ({ imageSource, title, audioSource, id }) => {
  const { currentSoundId, isPlaying, isPaused, currentTime, totalTime, playAudio, pauseAudio } =
    useContext(AudioContext);

  const playClickHandler = () => {
    if (isPlaying && id === currentSoundId) {
      pauseAudio();
    } else {
      playAudio(audioSource, id);
    }
  };

  const currentTimePercentage = (currentTime / totalTime) * 89 + 5.5;

  const timeTrackerStyle = {
    width: `${currentTimePercentage}%`,
  };

  const pathname = title.trim().replace(/\s+/g, '-').toLowerCase() + '-' + id;

  return (
    <li className={classes['main__sound']}>
      <div
        className={`
        ${classes.box} ${(isPaused || isPlaying) && id === currentSoundId ? classes.isPlaying : ''}
      `}>
        <img className={classes['box__img']} src={imageSource} alt={title} />

        <button onClick={playClickHandler} className={classes.box__playIcon}>
          <svg>
            <use xlinkHref={`${svg}#icon-${(isPaused || isPlaying) && id === currentSoundId ? null : 'play'}`}></use>
          </svg>
        </button>

        <Link
          to={`/audio/${pathname}`}
          state={{
            imageSource,
            title,
            audioSource,
            id,
          }}
          style={{
            display: `${(isPaused || isPlaying) && id === currentSoundId ? 'block' : 'none'}`,
          }}
          className={classes.box__maximizeIcon}>
          <svg>
            <use xlinkHref={`${svg}#icon-maximize`}></use>
          </svg>
        </Link>

        <button className={classes.box__heartIcon}>
          <svg>
            <use xlinkHref={`${svg}#icon-heart`}></use>
          </svg>
        </button>

        <div
          className={`${classes.box__menu} ${(isPaused || isPlaying) && id === currentSoundId ? '' : classes.hidden}
          
        `}>
          <div style={timeTrackerStyle} className={classes['time-tracker']}></div>
          <div className={classes.box__icons}>
            <svg onClick={playClickHandler} className={classes['icon__volume']}>
              <use xlinkHref={`${svg}#icon-${isPaused && id === currentSoundId ? 'play' : 'pause'}`}></use>
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
