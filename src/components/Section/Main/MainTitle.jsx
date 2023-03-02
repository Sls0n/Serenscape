import React from 'react';

import classes from './MainTitle.module.scss';

const MainTitle = ({ title }) => {
  return (
    <div className={classes['main__titlebox']}>
      <div className={classes['main__header']}>{title}</div>
    </div>
  );
};

export default MainTitle;
