import React, { useContext } from 'react';

import classes from './MainSound.module.scss';
import svg from '../../../../assets/svg/sprite.svg';

import { AudioContext } from '../../../../context/audio-context';
import { Link } from 'react-router-dom';

import { db } from '../../../../config/firebase-config';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const MainSound = ({ imageSource, title, audioSource, id }) => {
  const auth = getAuth();

  const { currentSoundId, isPlaying, isPaused, currentTime, totalTime, playAudio, pauseAudio } =
    useContext(AudioContext);

  const favoriteCollectionRef = collection(db, 'favorites');

  const playClickHandler = () => {
    if (isPlaying && id === currentSoundId) {
      pauseAudio();
    } else {
      playAudio(audioSource, id);
    }
  };

  const favoriteClickHandler = async () => {
    try {
      if (!auth.currentUser) throw new Error('You must be logged in to add to favorites');

      const userId = auth.currentUser.uid;

      if (id === currentSoundId) {
        await addDoc(favoriteCollectionRef, {
          imageSource,
          title,
          audioSource,
          id,
          userId,
        });
      }
    } catch (error) {
      console.log(error);
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
        <img
          className={classes['box__img']}
          src={imageSource} // add alt when the image loads
          alt=""
          onLoad={(e) => {
            e.target.alt = title;
          }}
        />

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

        <button onClick={favoriteClickHandler} className={classes.box__heartIcon}>
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
