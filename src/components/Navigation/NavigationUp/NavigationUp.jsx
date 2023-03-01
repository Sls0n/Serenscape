import React from 'react';

import svg from '../../../assets/svg/sprite.svg';
import classes from './NavigationUp.module.scss';

const NavigationUp = () => {
  return (
    <div className={classes['aside__up']}>
      <div className={classes.menu}>
        <svg className={classes['aside__up-icon']}>
          <use xlinkHref={`${svg}#icon-align-left`} />
        </svg>
      </div>
    </div>
  );
};

export default NavigationUp;
