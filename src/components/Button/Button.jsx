import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.scss';

const Button = ({ text, onClick = () => {}, to }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Link to={to} onClick={clickHandler} className={classes.btn}>
      {text}
    </Link>
  );
};

export default Button;
