import React from 'react';

import svg from '../../assets/svg/sprite.svg';
import classes from './BackButton.module.scss';

const BackButton = () => {
  return (
    // <div className={classes['header__down-icon']}>
    <div className={classes.arrow}>
      <svg className={classes.arrowSvg}>
        <use xlinkHref={`${svg}#icon-arrow-left`}></use>
      </svg>
    </div>
    // </div>
  );
};

export default BackButton;
