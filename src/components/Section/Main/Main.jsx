import React from 'react';

import MainSoundList from './MainSounds/MainSoundList';
import classes from './Main.module.scss';
import MainTitle from './MainTitle';

const Main = () => {
  return (
    <>
      <main className={classes.main}>
        <MainSoundList />

        <br />
        <MainTitle title="My favorites" />
      </main>
    </>
  );
};

export default Main;
