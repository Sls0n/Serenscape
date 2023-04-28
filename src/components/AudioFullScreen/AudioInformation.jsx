import React from 'react';

import classes from './AudioInformation.module.scss';
import forest from '../../assets/images/landscape.jpg';

const AudioInformation = () => {
  return (
    <div className={classes['container__info']}>
      <div className={classes['container__info-cover']}>
        <img src={forest} alt="forest" />
      </div>

      <h1 className={classes['container__info-title']}>Forest Storm</h1>

      <div className={classes['container__info-artist']}>
        <figure>
          <img
            src={
              'https://yt3.googleusercontent.com/Fq7TTFgrg7h1M7oulRG75wxG5zz2s8DHt497NtJ3iZSZ5pv0QNu1Gup9AJNLGENYvQqu9QHD=s900-c-k-c0x00ffffff-no-rj'
            }
            alt="forest"
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
