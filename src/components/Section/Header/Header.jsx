import React from 'react';
import HeaderDown from './HeaderDown/HeaderDown';
import HeaderUp from './HeaderUp/HeaderUp';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <HeaderUp />
      <HeaderDown />
    </header>
  );
};

export default Header;
