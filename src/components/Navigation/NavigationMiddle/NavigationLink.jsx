import React, { useContext } from 'react';

import svg from '../../../assets/svg/sprite.svg';
import classes from './NavigationLink.module.scss';
import { NavLink } from 'react-router-dom';

import NavContext from '../../../context/nav-context';

const NavigationLink = ({ name, icon, link }) => {
  const { isOpen } = useContext(NavContext);
  // ``
  return (
    <li className={classes['aside__list']}>
      <NavLink to={link} className={({ isActive }) => (isActive ? classes.active : undefined)}>
        <div className={classes['aside__icon']}>
          <svg className={`${classes.link - svg} ${isOpen ? classes.close : ''}`}>
            <use xlinkHref={`${svg}#${icon}`} />
          </svg>
        </div>
        {!isOpen && <h4 className={classes['aside__text']}>{name}</h4>}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
