import React from 'react';
import HeaderDown from './HeaderDown/HeaderDown';
import HeaderUp from './HeaderUp/HeaderUp';
import classes from './Header.module.scss';

const Header = ({ firstNav, secondNav }) => {
  return (
    <header className={classes.header}>
      <HeaderUp />
      <HeaderDown firstNav={firstNav} secondNav={secondNav} />
    </header>
  );
};

export default Header;
