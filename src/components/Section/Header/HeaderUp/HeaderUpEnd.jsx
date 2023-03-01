import React from 'react';

import classes from './HeaderUpEnd.module.scss';
import svg from '../../../../assets/svg/sprite.svg';
import Button from '../../../Button/Button';

const HeaderUpEnd = () => {
  return (
    <div className={classes['header__up-end']}>
      <div className={classes['header__up-icons']}>
        <div className={classes.moon}>
          <svg className={classes['header__up-icon']}>
            <use xlinkHref={`${svg}#icon-moon`}></use>
          </svg>
        </div>
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

        <Button value={'Sign In'} />
      </div>
    </div>
  );
};

export default HeaderUpEnd;
