import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { db } from '../../../../config/firebase-config';
import { getDocs, collection, query, where, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import MainSound from './MainSound';
import MainSoundSkeleton from './MainSoundSkeleton';

import classes from './FavoriteSoundList.module.scss';
import svg from '../../../../assets/svg/sprite.svg';

const FavoriteSoundList = () => {
  const auth = getAuth();
  const queryClient = useQueryClient();

  onSnapshot(collection(db, 'favorites'), (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
      }
      if (change.type === 'modified') {
      }
      if (change.type === 'removed') {
      }
    });

    queryClient.invalidateQueries('favoriteSounds');
  });

  const getFavoriteSounds = async () => {
    if (!auth.currentUser) {
      return [];
    }
    const favoriteCollectionRef = collection(db, 'favorites');
    const userId = auth.currentUser.uid;

    const q = query(favoriteCollectionRef, where('userId', '==', userId));
    const data = await getDocs(q);

    const favoritesData = data.docs.map((doc) => doc.data());
    return favoritesData;
  };

  const { data, isError, isLoading, error } = useQuery(['favoriteSounds'], getFavoriteSounds);

  if (isLoading) {
    return <MainSoundSkeleton />;
  }

  if (isError) {
    return <p className={classes['favorite__sounds--empty']}>{error.message}</p>;
  }

  return (
    <>
      {!auth.currentUser && (
        <>
          <div className={classes.errorbox}>
            <svg className={classes.svg}>
              <use xlinkHref={`${svg}#icon-alert-circle`}></use>
            </svg>
            <p className={classes.errorbox__message}>
              You need to{' '}
              <a href="/signin" className={classes.errorbox__link}>
                <span>sign in</span>
              </a>{' '}
              to access your favorites
            </p>
          </div>
        </>
      )}
      <ul className={classes.favorite__sounds}>
        {auth.currentUser && data.length === 0 && (
          <p className={classes['favorite__sounds--empty']}>No favorites yet.</p>
        )}
        {data.map(
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
    </>
  );
};

export default FavoriteSoundList;
