import React from 'react';

import svg from '../../../assets/svg/sprite.svg';
import classes from './HeaderUpFirst.module.scss';

const HeaderBreadcrumb = ({ firstNav, secondNav }) => {
  return (
    <div className={classes['header__down-breadcrumb']}>
      <span className={classes['header__down-item']}>{firstNav}</span>
      <div className={classes['chevron-right']}>
        <svg className={classes['header__down-chevron']}>
          <use xlinkHref={`${svg}#icon-chevron-right`}></use>
        </svg>
      </div>
      <span className={classes['header__down-item']}>{secondNav}</span>
    </div>
  );
};

export default HeaderBreadcrumb;
