import React from 'react';

import classes from './AuthButton.module.scss';
import { Link } from 'react-router-dom';

const AuthButton = ({ onClick, text, to = '' }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Link onClick={clickHandler} to={to} className={classes.btn}>
      {text}
    </Link>
  );
};

export default AuthButton;
