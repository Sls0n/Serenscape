import React from 'react';
import BackButton from '../../Button/BackButton';

import HeaderBreadcrumb from './HeaderBreadcrumb';
import classes from './HeaderDown.module.scss';

const HeaderDown = ({ firstNav, secondNav }) => {
  return (
    <div className={classes['header__down']}>
      <BackButton />
      <HeaderBreadcrumb firstNav={firstNav} secondNav={secondNav} />
    </div>
  );
};

export default HeaderDown;
