import React from 'react';

import svg from '../../../assets/svg/sprite.svg';
import classes from './NavigationLink.module.scss';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ name, icon, link }) => {
  return (
    <li className={classes['aside__list']}>
      <NavLink to={link} className={classes['aside__link']}>
        <div className={classes['aside__icon']}>
          <svg className={classes['aside__link-svg']}>
            <use xlinkHref={`${svg}#${icon}`} />
          </svg>
        </div>

        <div className={classes['aside__text']}>{name}</div>
      </NavLink>
    </li>
  );
};

export default NavigationLink;
