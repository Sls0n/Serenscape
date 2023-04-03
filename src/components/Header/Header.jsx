import React from 'react';
import HeaderUp from './HeaderUp/HeaderUp';
import HeaderDown from './HeaderDown/HeaderDown';
import classes from './Header.module.scss';

const Header = ({ firstNav, secondNav }) => {
  return (
    <header className={classes.header}>
      <HeaderUp firstNav={firstNav} secondNav={secondNav} />
      <HeaderDown />
    </header>
  );
};

export default Header;
