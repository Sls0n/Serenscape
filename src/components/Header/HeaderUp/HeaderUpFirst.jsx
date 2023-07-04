import React from 'react';

import svg from '../../../assets/svg/sprite.svg';
import classes from './HeaderUpFirst.module.scss';
import BackButton from '../../Button/BackButton';
import NavContext from '../../../context/nav-context';

const HeaderBreadcrumb = ({ firstNav, secondNav }) => {
  const { isMobile, setIsMobile } = React.useContext(NavContext);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsMobile(!isMobile);
        }}
        className={classes.menu}>
        <svg className={classes['header__up-icon']}>
          <use xlinkHref={`${svg}#icon-menu`}></use>
        </svg>
      </button>
      <BackButton />
      <div className={classes['header__down-breadcrumb']}>
        <span className={classes['header__down-item']}>{firstNav}</span>
        <div className={classes['chevron-right']}>
          <svg className={classes['header__down-chevron']}>
            <use xlinkHref={`${svg}#icon-chevron-right`}></use>
          </svg>
        </div>
        <span className={classes['header__down-item']}>{secondNav}</span>
      </div>
    </>
  );
};

export default HeaderBreadcrumb;
