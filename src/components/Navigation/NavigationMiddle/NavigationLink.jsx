import React from 'react';

import svg from '../../../assets/svg/sprite.svg';
import classes from './NavigationLink.module.scss';

const NavigationLink = ({ name, icon }) => {
  return (
    <li className={classes['aside__list']}>
      <a href="#a" className={classes['aside__link']}>
        <div className={classes['aside__icon']}>
          <svg className={classes['aside__link-svg']}>
            <use xlinkHref={`${svg}#${icon}`} />
          </svg>
        </div>

        <div className={classes['aside__text']}>{name}</div>
      </a>
    </li>
  );
};

export default NavigationLink;
