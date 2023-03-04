import React, { useContext } from 'react';

import classes from './HeaderUpEnd.module.scss';
import svg from '../../../assets/svg/sprite.svg';
import Button from '../../Button/Button';

import ThemeContext from '../../../context/theme-context';

const HeaderUpEnd = () => {
  const { isDark, setDark } = useContext(ThemeContext);

  const clickHandler = (e) => {
    e.preventDefault();
    setDark(!isDark);
  };

  return (
    <div className={classes['header__up-end']}>
      <div className={classes['header__up-icons']}>
        <button className={classes.moon} onClick={clickHandler}>
          <svg className={classes['header__up-icon']}>
            <use xlinkHref={`${svg}#${isDark ? 'icon-sun' : 'icon-moon'}`}></use>
          </svg>
        </button>
        <div className={classes.volume}>
          <svg className={classes['header__up-icon']}>
            <use xlinkHref={`${svg}#icon-volume-2`}></use>
          </svg>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          className={classes['header__up-volume']}
          onChange={() => {}}
        />

        <Button value={'Sign In -->'} />
      </div>
    </div>
  );
};

export default HeaderUpEnd;
