import React from 'react';

import MainSoundList from './MainSounds/MainSoundList';
import MainTitle from './MainTitle';

const Main = () => {
  return (
    <main className="main">
      <MainTitle title="Nature Sounds" />
      <MainSoundList />

      <br />
      <MainTitle title="My favorites" />
    </main>
  );
};

export default Main;
