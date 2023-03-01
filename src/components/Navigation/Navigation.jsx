import React from 'react';

import NavigationMiddle from './NavigationMiddle/NavigationMiddle';
import NavigationUp from './NavigationUp/NavigationUp';
import classes from './Navigation.module.scss';

const Navigation = () => {
  return (
    <aside className={classes.aside}>
      <NavigationUp />
      <NavigationMiddle />
    </aside>
  );
};

export default Navigation;
