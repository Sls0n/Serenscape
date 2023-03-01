import React from 'react';

import classes from './NavigationHeader.module.scss';

const NavigationHeader = ({ heading }) => {
  return <div className={classes['aside__header']}>{heading}</div>;
};

export default NavigationHeader;
