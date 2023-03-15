import React from 'react';

import classes from './HeaderUpFirst.module.scss';

const HeaderUpFirst = () => {
  return (
    <div className={classes['header__up-first']}>
      <h1 className={classes['header__up-logo']}>
        seren<span className={classes.scape}>scape</span>
      </h1>
    </div>
  );
};

export default HeaderUpFirst;
