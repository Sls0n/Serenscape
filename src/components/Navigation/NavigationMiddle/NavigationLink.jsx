import React, { useContext } from 'react';

import svg from '../../../assets/svg/sprite.svg';
import classes from './NavigationLink.module.scss';
import { NavLink } from 'react-router-dom';

import NavContext from '../../../context/NavContext';

const NavigationLink = ({ name, icon, link }) => {
  const { isOpen } = useContext(NavContext);

  return (
    <li className={classes['aside__list']}>
      <NavLink to={link} className={({ isActive }) => (isActive ? classes.active : undefined)}>
        <div className={classes['aside__icon']}>
          <svg className={!isOpen ? classes['aside__link-svg'] : classes.close}>
            <use xlinkHref={`${svg}#${icon}`} />
          </svg>
        </div>
        {!isOpen && <div className={classes['aside__text']}>{name}</div>}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
