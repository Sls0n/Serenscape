import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import MainSoundList from '../components/Section/Main/MainSounds/MainSoundList';
import MainTitle from '../components/Section/Main/MainTitle';

const OfficialPage = () => {
  return (
    <Section>
      <Header firstNav={'Serenscape'} secondNav={'Official'} />
      <MainTitle title={'Serenscape uploads'} />
      <MainSoundList />
    </Section>
  );
};

export default OfficialPage;
