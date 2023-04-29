import React, { useEffect } from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';

import { db } from '../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const FavoritesPage = () => {
  const auth = getAuth();

  const favoriteCollectionRef = collection(db, 'favorites');

  useEffect(() => {
    const getFavorites = async () => {
      try {
        if (!auth.currentUser) throw new Error('You must be logged in to add to favorites');

        const userId = auth.currentUser.uid;

        const data = await getDocs(favoriteCollectionRef);
        const favoritesData = data.docs.map((doc) => doc.data());
        const filteredFavoritesData = favoritesData.filter((favorite) => favorite.userId === userId);

        console.log(filteredFavoritesData);
      } catch (error) {
        console.log(error);
      }
    };

    getFavorites();
  }, [auth.currentUser, favoriteCollectionRef]);

  return (
    <Section>
      <Header firstNav={'Navigation'} secondNav={'Favorites'} />
    </Section>
  );
};

export default FavoritesPage;
