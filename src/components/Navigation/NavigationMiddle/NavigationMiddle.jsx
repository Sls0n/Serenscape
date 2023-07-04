import React from 'react';

import NavigationLinkLists from './NavigationLinkLists';
import classes from './NavigationMiddle.module.scss';

const NavigationMiddle = ({ showUploadBtn, showSettings = true }) => {
  return (
    <div className={classes['aside__middle']}>
      <nav>
        <NavigationLinkLists showUploadBtn={showUploadBtn} showSettings={showSettings} />
      </nav>
    </div>
  );
};

export default NavigationMiddle;
