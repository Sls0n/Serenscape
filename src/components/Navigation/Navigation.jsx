import React, { useState } from 'react';

import NavigationMiddle from './NavigationMiddle/NavigationMiddle';
import NavigationUp from './NavigationUp/NavigationUp';
import classes from './Navigation.module.scss';
import NavContext from '../../context/NavContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      <aside className={!isOpen ? classes.aside : classes.asideClosed}>
        <NavigationUp />
        <NavigationMiddle />
      </aside>
    </NavContext.Provider>
  );
};

export default Navigation;
