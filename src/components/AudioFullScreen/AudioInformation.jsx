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
          <img src={state?.pfp} alt={state?.artist} />
        </figure>
        <p>
          Artist: <span>{state?.artist}</span>
        </p>
      </div>
    </div>
  );
};

export default AudioInformation;
