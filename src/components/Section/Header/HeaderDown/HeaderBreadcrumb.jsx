import React from 'react';

import svg from '../../../../assets/svg/sprite.svg';
import classes from './HeaderBreadcrumb.module.scss';

const HeaderBreadcrumb = ({ first, second, last }) => {
  return (
    <div className={classes['header__down-breadcrumb']}>
      <span className={classes['header__down-item']}>{first}</span>
      <div className={classes['chevron-right']}>
        <svg className={classes['header__down-chevron']}>
          <use xlinkHref={`${svg}#icon-chevron-right`}></use>
        </svg>
      </div>
      <span className={classes['header__down-item']}>{second}</span>
      <div className={classes['chevron-right']}>
        <svg className={classes['header__down-chevron'] + ' ' + classes['last-chevron']}>
          <use xlinkHref={`${svg}#icon-chevron-right`}></use>
        </svg>
      </div>
      <span className={classes['header__down-item']}>{last}</span>
    </div>
  );
};

export default HeaderBreadcrumb;
