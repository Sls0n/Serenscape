import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import FilteredUserSoundList from '../components/Section/Main/MainSounds/FilteredUserSoundList';
import UploadButton from '../components/Button/UploadButton';

const MyUploads = () => {
  return (
    <Section>
      <Header firstNav={'Serenscape'} secondNav={'Uploads'} />
      <UploadButton />
      <FilteredUserSoundList />
    </Section>
  );
};

export default MyUploads;
