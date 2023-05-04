import React, { useState, useEffect } from 'react';
import { db } from '../../../../config/firebase-config';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import MainSound from './MainSound';
import MainSoundSkeleton from './MainSoundSkeleton';

import classes from './FavoriteSoundList.module.scss';

const FavoriteSoundList = () => {
  const [favorites, setFavorites] = useState([]);
  const [isFavoriteLoading, setIsFavoriteLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  const favoriteCollectionRef = collection(db, 'favorites');

  useEffect(() => {
    const getFavorites = async () => {
      try {
        if (!auth.currentUser) throw new Error('You must be logged in to add to favorites');
        setIsFavoriteLoading(true);
        setIsLoading(true);

        const userId = auth.currentUser.uid;

        const q = query(favoriteCollectionRef, where('userId', '==', userId));
        const data = await getDocs(q);

        const favoritesData = data.docs.map((doc) => doc.data());

        setFavorites(favoritesData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        setIsFavoriteLoading(false);
      }
    };

    getFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && isFavoriteLoading ? (
        <MainSoundSkeleton />
      ) : (
        <ul className={classes.favorite__sounds}>
          {favorites.length === 0 && <p className={classes['favorite__sounds--empty']}>No favorites yet. </p>}
          {favorites.map(
            (favorite) =>
              favorite.imageSource &&
              favorite.title &&
              favorite.audioSource &&
              favorite.id && (
                <MainSound
                  key={favorite?.id}
                  imageSource={favorite?.imageSource}
                  title={favorite?.title}
                  audioSource={favorite?.audioSource}
                  pfp={favorite?.pfp}
                  artist={favorite?.artist}
                  id={favorite?.id}
                />
              )
          )}
        </ul>
      )}
    </>
  );
};

export default FavoriteSoundList;
