import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import FilteredUserSoundList from '../components/Section/Main/MainSounds/FilteredUserSoundList';

const MyUploads = () => {
  return (
    <Section>
      <Header firstNav={'Serenscape'} secondNav={'Uploads'} />
      <FilteredUserSoundList />
    </Section>
  );
};

export default MyUploads;
