import React, { useContext } from 'react';

import svg from '../../../assets/svg/sprite.svg';
import classes from './NavigationUp.module.scss';
import NavContext from '../../../context/nav-context';

const NavigationUp = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${classes.aside__up} ${isOpen ? classes.close : ''}`}>
      <div className={classes.menu} onClick={clickHandler}>
        <svg className={classes['aside__up-icon']}>
          <use xlinkHref={`${svg}#icon-align-left`} />
        </svg>
      </div>
      <div className={classes['header__up-first']}>
        <h1 className={classes['header__up-logo']}>
          seren<span className={classes.scape}>scape</span>
        </h1>
      </div>
    </div>
  );
};

export default NavigationUp;
