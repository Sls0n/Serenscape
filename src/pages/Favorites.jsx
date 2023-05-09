import React from 'react';
import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import FavoriteSoundList from '../components/Section/Main/MainSounds/FavoriteSoundList';

const FavoritesPage = () => {
  return (
    <Section>
      <Header firstNav={'Serenscape'} secondNav={'Favorites'} />

      <FavoriteSoundList />
    </Section>
  );
};

export default FavoritesPage;
