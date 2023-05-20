import React, { useContext } from 'react';

import classes from './AudioFullScreen.module.scss';

import svg from '../../assets/svg/sprite.svg';
import { Link, useNavigate } from 'react-router-dom';
import AudioInformation from './AudioInformation';

import { AudioContext } from '../../context/audio-context';
import { useLocation } from 'react-router-dom';

const AudioFullScreen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { currentTime, totalTime } = useContext(AudioContext);

  const currentTimePercentage = (currentTime / totalTime) * 95 + 3;

  return (
    <>
      <div className={classes['container']}>
        <Link onClick={() => navigate(-1)} className={classes['container__back-btn']}>
          <svg>
            <use xlinkHref={`${svg}#icon-chevron-left`}></use>
          </svg>
        </Link>
        <div className={classes['container__img']}>
          <img src={state?.imageSource} alt={state?.title} />
        </div>

        <AudioInformation />

        {/* <div className={classes['container__controls']}>
          <button className={classes['container__controls--left']}>
            <svg>
              <use xlinkHref={`${svg}#icon-heart`}></use>
            </svg>
          </button>
          <button className={classes['container__controls--middle']}>
            <svg>
              <use xlinkHref={`${svg}#icon-share-2`}></use>
            </svg>
          </button>
          <button className={classes['container__controls--right']}>
            <svg>
              <use xlinkHref={`${svg}#icon-volume-2`}></use>
            </svg>
          </button>
        </div> */}

        <div className={classes['container__progress']}>
          <div
            style={{
              width: `${currentTimePercentage}%`,
            }}
            className={classes['container__progress--bar']}></div>
        </div>
      </div>
    </>
  );
};

export default AudioFullScreen;
