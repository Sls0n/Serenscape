import React from 'react';
import classes from './SignUpHeader.module.scss';
import { Link } from 'react-router-dom';

const SignUpHeader = () => {
  return (
    <header className={classes.header}>
      <Link to={'/'} className={classes['header__logo']}>
        serenscape
      </Link>
    </header>
  );
};

export default SignUpHeader;
