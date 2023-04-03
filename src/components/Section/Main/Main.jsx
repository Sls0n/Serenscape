import React from 'react';

import MainSoundList from './MainSounds/MainSoundList';
import MainTitle from './MainTitle';

const Main = () => {
  return (
    <main className="main">
      <MainSoundList />

      <br />
      <MainTitle title="My favorites" />
      <MainSoundList />
    </main>
  );
};

export default Main;
