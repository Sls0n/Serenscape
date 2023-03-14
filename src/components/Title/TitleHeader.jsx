import React from 'react';

import classes from './TitleHeader.module.scss';
import svg from '../../../src/assets/svg/sprite.svg';
import { Link } from 'react-router-dom';

const TitleHeader = ({ title, link = 'View all' }) => {
  return (
    <div className={classes['main__titlebox']}>
      <div className={classes['main__header']}>{title}</div>
      <Link className={classes['main__subheader']}>
        <div className="text">{link}</div>

        {link && (
          <svg className={classes.chevron}>
            <use xlinkHref={`${svg}#icon-chevron-right`}></use>
          </svg>
        )}
      </Link>
    </div>
  );
};

export default TitleHeader;
