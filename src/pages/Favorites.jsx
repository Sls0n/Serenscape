import React from 'react';
import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import FavoriteSoundList from '../components/Section/Main/MainSounds/FavoriteSoundList';
import MainTitle from '../components/Section/Main/MainTitle';
import UploadButton from '../components/Button/UploadButton';

const FavoritesPage = () => {
  return (
    <Section>
      <Header firstNav={'Serenscape'} secondNav={'Favorites'} />
      <UploadButton />
      <MainTitle title={'My Favorites'} />
      <FavoriteSoundList />
    </Section>
  );
};

export default FavoritesPage;
