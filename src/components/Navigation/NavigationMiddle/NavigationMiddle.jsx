import React from 'react';

import NavigationLinkLists from './NavigationLinkLists';
import classes from './NavigationMiddle.module.scss';

const NavigationMiddle = () => {
  return (
    <div className={classes['aside__middle']}>
      <nav>
        <NavigationLinkLists />
      </nav>
    </div>
  );
};

export default NavigationMiddle;
