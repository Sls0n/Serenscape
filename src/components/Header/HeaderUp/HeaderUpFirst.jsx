import React from 'react';

import classes from './HeaderUpFirst.module.scss';

const HeaderUpFirst = () => {
  return (
    <div className={classes['header__up-first']}>
      <div className={classes['header__up-logo']}>
        seren<span className={classes.scape}>scape</span>
      </div>
    </div>
  );
};

export default HeaderUpFirst;
