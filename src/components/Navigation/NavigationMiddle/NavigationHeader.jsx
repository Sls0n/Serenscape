import React from 'react';

import classes from './NavigationHeader.module.scss';

const NavigationHeader = ({ heading }) => {
  return <h2 className={classes['aside__header']}>{heading}</h2>;
};

export default NavigationHeader;
