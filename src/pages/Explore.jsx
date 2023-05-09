import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import UserSoundList from '../components/Section/Main/MainSounds/UserSoundList';

const ExplorePage = () => {
  return (
    <Section>
      <Header firstNav={'Serenscape'} secondNav={'Explore'} />
      <UserSoundList />
    </Section>
  );
};

export default ExplorePage;
