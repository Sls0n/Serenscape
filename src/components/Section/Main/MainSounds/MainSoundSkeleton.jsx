import React from 'react';

import classes from './MainSoundSkeleton.module.scss';

const MainSoundList = () => {
  const skeleton = (
    <li className={classes['main__sound']}>
      <div className={classes.box}></div>

      <div className={classes['main__text']}>
        <div className={classes['main__title']}></div>
        <div className={classes['main__author']}></div>
      </div>
    </li>
  );

  return (
    <>
      <ul className={classes['main__sounds']}>
        {skeleton}
        {skeleton}
        {skeleton}
        {skeleton}
      </ul>
    </>
  );
};

export default MainSoundList;
