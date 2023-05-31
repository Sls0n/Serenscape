import React, { useContext, useEffect, useMemo, useState, useReducer } from 'react';
import { useQuery } from '@tanstack/react-query';

import classes from './MainSound.module.scss';
import svg from '../../../../assets/svg/sprite.svg';

import { AudioContext } from '../../../../context/audio-context';
import { Link } from 'react-router-dom';

import { db } from '../../../../config/firebase-config';
import { getDocs, collection, addDoc, deleteDoc, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Notification from '../../../Notification/Notification';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return {
        ...state,
        showNotification: true,
        notificationMessage: action.payload,
        notificationStatus: action.status,
      };
    case 'HIDE_NOTIFICATION':
      return { ...state, showNotification: false };
    default:
      return state;
  }
};

const MainSound = ({ imageSource, title, audioSource, pfp, artist, id }) => {
  const auth = getAuth();

  const { currentSoundId, isPlaying, isPaused, currentTime, totalTime, playAudio, pauseAudio } =
    useContext(AudioContext);

  const [isFavorite, setIsFavorite] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    showNotification: false,
    notificationMessage: '',
    notificationStatus: 'default',
  });

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
      if (!auth.currentUser) throw new Error('You must be logged in to add to favorites');
      setIsFavorite((prevState) => !prevState);

      const userId = auth.currentUser.uid;

      if (id === currentSoundId) {
        const data = await getDocs(favoriteCollectionRef);
        const favoritesData = data.docs.map((doc) => doc.data());

        if (favoritesData.some((favorite) => favorite.id === id)) {
          const docToDelete = data.docs.find((doc) => doc.data().id === id);
          await deleteDoc(docToDelete.ref);
          dispatch({ type: 'SHOW_NOTIFICATION', payload: 'Removed from favorites', status: 'error' });
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

          dispatch({ type: 'SHOW_NOTIFICATION', payload: 'Added to favorites', status: 'success' });
          return;
        }
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: 'SHOW_NOTIFICATION', payload: error.message, status: 'error' });
    }
  };

  const currentTimePercentage = (currentTime / totalTime) * 89 + 5.5;

  const timeTrackerStyle = {
    width: `${currentTimePercentage}%`,
  };

  const pathname = useMemo(() => {
    return title.trim().replace(/\s+/g, '-').toLowerCase() + '-' + id;
  }, [title, id]);

  useEffect(() => {
    if (state.showNotification) {
      const timeout = setTimeout(() => {
        dispatch({ type: 'HIDE_NOTIFICATION' });
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [state.showNotification, dispatch]);

  return (
    <>
      <Notification
        open={state.showNotification}
        closeFn={() => dispatch({ type: 'HIDE_NOTIFICATION' })}
        message={state.notificationMessage}
        status={state.notificationStatus}
      />

      <li className={classes['main__sound']}>
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
              <svg>
                <use xlinkHref={`${svg}#icon-${!isFavorite && id === currentSoundId ? 'heart' : 'trash'}`}></use>
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
