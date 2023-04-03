import React from 'react';

import classes from './AuthButton.module.scss';
import { Link } from 'react-router-dom';

const AuthButton = ({ text, to = '' }) => {
  return (
    <Link to={to} className={classes.btn}>
      {text}
    </Link>
  );
};

export default AuthButton;
