import React from 'react';

import classes from './Button.module.scss';

const Button = ({ value }) => {
  return <button className={classes.btn}>{value}</button>;
};

export default Button;
