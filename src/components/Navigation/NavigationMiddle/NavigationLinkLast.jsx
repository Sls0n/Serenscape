import React, { useContext } from 'react';

import svg from '../../../assets/svg/sprite.svg';
import classes from './NavigationLink.module.scss';

import NavContext from '../../../context/nav-context';

const NavigationLink = ({ name, icon, onClick }) => {
  const { isOpen } = useContext(NavContext);

  const clickHandler = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <li className={classes['aside__list']}>
      <a href="/" onClick={clickHandler}>
        <div className={classes['aside__icon']}>
          <svg className={!isOpen ? classes['aside__link-svg'] : classes.close}>
            <use xlinkHref={`${svg}#${icon}`} />
          </svg>
        </div>

        {!isOpen && <div className={classes['aside__text']}>{name}</div>}
      </a>
    </li>
  );
};

export default NavigationLink;
