import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SignInHeader.module.scss';

const SignInHeader = () => {
  return (
    <header className={classes.header}>
      <Link to={'/'} className={classes['header__logo']}>serenscape</Link>
    </header>
  );
};

export default SignInHeader;
