import React from 'react';
import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import FavoriteSoundList from '../components/Section/Main/MainSounds/FavoriteSoundList';
import MainTitle from '../components/Section/Main/MainTitle';

const FavoritesPage = () => {
  return (
    <Section>
      <Header firstNav={'Serenscape'} secondNav={'Favorites'} />
      <MainTitle title={'My Favorites'} />

      <FavoriteSoundList />
    </Section>
  );
};

export default FavoritesPage;
