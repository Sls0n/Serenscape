import React from 'react';

import MainSoundList from './MainSounds/MainSoundList';
import classes from './Main.module.scss';
import MainTitle from './MainTitle';
import FavoriteSoundList from './MainSounds/FavoriteSoundList';
import UserSoundList from './MainSounds/UserSoundList';

import { getAuth } from 'firebase/auth';

const Main = () => {
  const auth = getAuth();

  return (
    <>
      <main className={classes.main}>
        <MainTitle title="Serenscape uploads" />
        <MainSoundList />
        <br />

        <MainTitle title="Community uploads" to={'/explore'} />
        <UserSoundList />
        <br />
        {auth.currentUser && <MainTitle title="My favorites" to={'/favorites'} />}
        {auth.currentUser && <FavoriteSoundList />}
      </main>
    </>
  );
};

export default Main;
