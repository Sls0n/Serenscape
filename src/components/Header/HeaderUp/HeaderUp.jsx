import React from 'react';

import classes from './HeaderUp.module.scss';
import HeaderUpEnd from './HeaderUpEnd';
import HeaderUpFirst from './HeaderUpFirst';

const HeaderUp = ({ firstNav, secondNav }) => {
  return (
    <div className={classes['header__up']}>
      <HeaderUpFirst firstNav={firstNav} secondNav={secondNav} />
      <HeaderUpEnd />
    </div>
  );
};

export default HeaderUp;
