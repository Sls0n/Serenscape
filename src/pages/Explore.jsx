import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import UserSoundList from '../components/Section/Main/MainSounds/UserSoundList';
import MainTitle from '../components/Section/Main/MainTitle';
import UploadButton from '../components/Button/UploadButton';

const ExplorePage = () => {
  return (
    <Section>
      <Header firstNav={'Serenscape'} secondNav={'Explore'} />
      <UploadButton />
      <MainTitle title={'Users uploads'} />
      <UserSoundList />
    </Section>
  );
};

export default ExplorePage;
