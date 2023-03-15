import React from 'react';

import classes from './NavigationHeader.module.scss';

const NavigationHeader = ({ heading }) => {
  return <h3 className={classes['aside__header']}>{heading}</h3>;
};

export default NavigationHeader;
