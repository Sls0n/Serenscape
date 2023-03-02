import React from 'react';
import BackButton from '../../../Button/BackButton';

import HeaderBreadcrumb from './HeaderBreadcrumb';
import classes from './HeaderDown.module.scss';

const HeaderDown = () => {
  return (
    <div className={classes['header__down']}>
      <BackButton />
      <HeaderBreadcrumb first={'Serenscape'} second={'Navigation'} last={'Home'} />
    </div>
  );
};

export default HeaderDown;
