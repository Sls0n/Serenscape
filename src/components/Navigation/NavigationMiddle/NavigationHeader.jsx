import React from 'react';

import classes from './NavigationHeader.module.scss';

const NavigationHeader = ({ heading }) => {
  return (
    <li
      style={{
        listStyle: 'none',
      }}
      className={classes['aside__header']}>
      {heading}
    </li>
  );
};

export default NavigationHeader;
