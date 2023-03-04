import React, { useContext } from 'react';

import NavigationMiddle from './NavigationMiddle/NavigationMiddle';
import NavigationUp from './NavigationUp/NavigationUp';
import classes from './Navigation.module.scss';

import NavContext from '../../context/nav-context';

const Navigation = () => {
  const { isOpen } = useContext(NavContext);

  return (
    <aside className={!isOpen ? classes.aside : classes.asideClosed}>
      <NavigationUp />
      <NavigationMiddle />
    </aside>
  );
};

export default Navigation;
