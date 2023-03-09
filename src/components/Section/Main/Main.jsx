import React from 'react';

import MainSoundList from './MainSounds/MainSoundList';
import MainFavList from './MainSounds/MainFavList';
import MainTitle from './MainTitle';

const Main = () => {
  return (
    <main className="main">
      <MainTitle title="Nature Sounds" />
      <MainSoundList />

      <br />
      <MainTitle title="My favorites" />
      <MainFavList />
    </main>
  );
};

export default Main;
