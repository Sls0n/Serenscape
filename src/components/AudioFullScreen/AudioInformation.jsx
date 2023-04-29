import React from 'react';

import classes from './AudioInformation.module.scss';
import { useLocation } from 'react-router-dom';

const AudioInformation = () => {
  let { state } = useLocation();

  return (
    <div className={classes['container__info']}>
      <div className={classes['container__info-cover']}>
        <img src={state?.imageSource} alt={state?.title} />
      </div>

      <h1 className={classes['container__info-title']}>{state?.title}</h1>

      <div className={classes['container__info-artist']}>
        <figure>
          <img
            src={
              'https://yt3.googleusercontent.com/Fq7TTFgrg7h1M7oulRG75wxG5zz2s8DHt497NtJ3iZSZ5pv0QNu1Gup9AJNLGENYvQqu9QHD=s900-c-k-c0x00ffffff-no-rj'
            }
            alt="Artist"
          />
        </figure>
        <p>
          Artist: <span>Slson</span>
        </p>
      </div>
    </div>
  );
};

export default AudioInformation;
