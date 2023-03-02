import React from 'react';

import classes from './HeaderUp.module.scss';
import HeaderUpFirst from './HeaderUpFirst';
import HeaderUpEnd from './HeaderUpEnd';

const HeaderUp = () => {
  return (
    <div className={classes['header__up']}>
      <HeaderUpFirst />
      <HeaderUpEnd />
    </div>
  );
};

export default HeaderUp;
