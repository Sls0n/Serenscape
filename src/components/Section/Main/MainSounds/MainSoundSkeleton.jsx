import React from 'react';

import classes from './MainSoundSkeleton.module.scss';

const MainSoundSkeleton = () => {
  const skeleton = (
    <li className={classes['main__sound']}>
      <div className={classes.box}></div>

      <div className={classes['main__text']}>
        <h3 className={classes['main__title']}></h3>
        <p className={classes['main__author']}></p>
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

export default MainSoundSkeleton;
