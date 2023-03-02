import React, { useContext } from 'react';

import svg from '../../../assets/svg/sprite.svg';
import classes from './NavigationLink.module.scss';
import NavContext from '../../../context/NavContext';

const NavigationLink = ({ name, icon }) => {
  const { isOpen } = useContext(NavContext);

  return (
    <li className={classes['aside__list']}>
      <a href="/" onClick={(e) => e.preventDefault()}>
        <div className={classes['aside__icon']}>
          <svg className={classes['aside__link-svg']}>
            <use xlinkHref={`${svg}#${icon}`} />
          </svg>
        </div>

        {!isOpen && <div className={classes['aside__text']}>{name}</div>}
      </a>
    </li>
  );
};

export default NavigationLink;
