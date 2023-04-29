import React, { useEffect } from 'react';
import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import { db } from '../config/firebase-config';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const FavoritesPage = () => {
  const auth = getAuth();

  const favoriteCollectionRef = collection(db, 'favorites');

  useEffect(() => {
    const getFavorites = async () => {
      try {
        if (!auth.currentUser) throw new Error('You must be logged in to add to favorites');

        const userId = auth.currentUser.uid;

        const q = query(favoriteCollectionRef, where('userId', '==', userId));
        const data = await getDocs(q);

        const favoritesData = data.docs.map((doc) => doc.data());

        console.log(favoritesData);
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
