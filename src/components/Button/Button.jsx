import React from 'react';

import classes from './Button.module.scss';

const Button = ({ text }) => {
  return <button className={classes.btn}>{text}</button>;
};

export default Button;
