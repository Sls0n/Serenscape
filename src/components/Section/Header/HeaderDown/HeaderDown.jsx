import React from 'react';

import svg from '../../../../assets/svg/sprite.svg';
import classes from './HeaderDown.module.scss';

const HeaderDown = () => {
  return (
    <div className={classes['header__down']}>
      <div className={classes['header__down-breadcrumb']}>
        <div className={classes['header__down-icon']}>
          <div className={classes.arrow}>
            <svg className={classes['header__down-arrow']}>
              <use xlinkHref={`${svg}#icon-arrow-left`}></use>
            </svg>
          </div>
        </div>
        <span className={classes['header__down-item']}>Home</span>
        <div className={classes['chevron-right']}>
          <svg className={classes['header__down-chevron']}>
            <use xlinkHref={`${svg}#icon-chevron-right`}></use>
          </svg>
        </div>
        <span className={classes['header__down-item']}>Library</span>
        <div className={classes['chevron-right']}>
          <svg className={classes['header__down-chevron'] + ' ' + classes['last-chevron']}>
            <use xlinkHref={`${svg}#icon-chevron-right`}></use>
          </svg>
        </div>
        <span className={classes['header__down-item']}>Album</span>
      </div>
    </div>
  );
};

export default HeaderDown;
