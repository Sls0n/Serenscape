import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import classes from './MainSound.module.scss';
import svg from '../../../../assets/svg/sprite.svg';

import { AudioContext } from '../../../../context/audio-context';
import { Link } from 'react-router-dom';

import { db } from '../../../../config/firebase-config';
import { getDocs, collection, addDoc, deleteDoc, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Notification from '../../../Notification/Notification';
import useNotification from '../../../../hooks/useNotification';

const MainSound = ({ imageSource, title, audioSource, pfp, artist, id }) => {
  const auth = getAuth();

  const { currentSoundId, isPlaying, isPaused, currentTime, totalTime, playAudio, pauseAudio } =
    useContext(AudioContext);

  const [isFavorite, setIsFavorite] = useState(false);

  const { state, renderNotification, removeNotification } = useNotification();

  const favoriteCollectionRef = collection(db, 'favorites');

  const playClickHandler = () => {
    if (isPlaying && id === currentSoundId) {
      pauseAudio();
    } else {
      playAudio(audioSource, id);
    }
  };

  const getFavorites = async () => {
    if (!auth.currentUser) {
      return [];
    }
    const favoriteCollectionRef = collection(db, 'favorites');
    const userId = auth.currentUser.uid;

    const q = query(favoriteCollectionRef, where('userId', '==', userId));
    const data = await getDocs(q);

    const favoritesData = data.docs.map((doc) => doc.data());
    return favoritesData;
  };

  const { data, isLoading } = useQuery(['favorites'], getFavorites);

  useEffect(() => {
    if (data?.some((favorite) => favorite.id === id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [data]);

  const favoriteClickHandler = async () => {
    try {
      if (!auth.currentUser) throw new Error('You must be logged in to favorite a sound');
      setIsFavorite((prevState) => !prevState);

      const userId = auth.currentUser.uid;

      if (id === currentSoundId) {
        const data = await getDocs(favoriteCollectionRef);
        const favoritesData = data.docs.map((doc) => doc.data());

        if (favoritesData.some((favorite) => favorite.id === id)) {
          const docToDelete = data.docs.find((doc) => doc.data().id === id);
          await deleteDoc(docToDelete.ref);
          renderNotification('Removed from favorites', 'default');
          return;
        } else {
          setIsFavorite(true);

          await addDoc(favoriteCollectionRef, {
            imageSource,
            title,
            audioSource,
            id,
            userId,
            pfp,
            artist,
          });

          renderNotification('Added to favorites', 'success');

          return;
        }
      }
    } catch (error) {
      console.log(error);
      renderNotification(error.message, 'error');
    }
  };

  const timeTrackerStyle = useMemo(() => {
    return {
      width: `${(currentTime / totalTime) * 100}%`,
    };
  }, [currentTime, totalTime]);

  const pathname = useMemo(() => {
    return title.trim().replace(/\s+/g, '-').toLowerCase() + '-' + id;
  }, [title, id]);

  return (
    <>
      <li className={classes['main__sound']}>
        <Notification
          open={state.showNotification}
          closeFn={removeNotification}
          message={state.notificationMessage}
          status={state.notificationStatus}
        />
        <div
          className={`
        ${classes.box} ${(isPaused || isPlaying) && id === currentSoundId ? classes.isPlaying : ''}
      `}>
          <img
            className={classes['box__img']}
            src={imageSource}
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
              artist,
              pfp,
            }}
            style={{
              display: `${(isPaused || isPlaying) && id === currentSoundId ? 'block' : 'none'}`,
            }}
            className={classes.box__maximizeIcon}>
            <svg>
              <use xlinkHref={`${svg}#icon-maximize`}></use>
            </svg>
          </Link>
          {!isLoading ? (
            <button onClick={favoriteClickHandler} className={classes.box__heartIcon}>
              <svg
                style={{
                  fill: `${isFavorite && id === currentSoundId ? '#6461F8' : '#fff'}`,
                  filter: `${isFavorite && id === currentSoundId ? 'drop-shadow(0px 0px 5px #6461F810)' : ''}`,
                }}>
                <use xlinkHref={`${svg}#icon-${!isFavorite && id === currentSoundId ? 'heart' : 'heart-filled'}`}></use>
              </svg>
            </button>
          ) : (
            <button onClick={favoriteClickHandler} className={classes.box__loaderIcon}>
              <svg>
                <use xlinkHref={`${svg}#icon-loader`}></use>
              </svg>
            </button>
          )}

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

        <div className={classes.main__info}>
          <div className={classes.main__pfp}>
            <img src={pfp} alt="" />
          </div>

          <div className={classes['main__text']}>
            <h2 className={classes['main__title']}>{title}</h2>
            <p className={classes['main__author']}>
              Artist &mdash; <span>{artist}</span>
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default React.memo(MainSound);
