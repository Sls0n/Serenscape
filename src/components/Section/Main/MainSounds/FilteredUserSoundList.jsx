import React from 'react';
import { useQuery } from '@tanstack/react-query';

import MainSound from './MainSound';
import MainSoundSkeleton from './MainSoundSkeleton';
import MainTitle from '../MainTitle';

import svg from '../../../../assets/svg/sprite.svg';
import classes from './FilteredUserSoundList.module.scss';

import { db } from '../../../../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { where, query } from 'firebase/firestore';

const FilteredUserSoundList = () => {
  const auth = getAuth();

  const getFilteredUserSounds = async () => {
    if (!auth.currentUser) throw new Error('You need to be logged in to access your uploads');

    // Getting all the uploads from the collection, filtering them and displaying only the ones where userId === auth.currentUser.uid (current user's id)
    const uploadsCollectionRef = collection(db, 'uploads');
    const userId = auth.currentUser.uid;
    const q = query(uploadsCollectionRef, where('userId', '==', userId));
    const data = await getDocs(q);
    const soundsData = data.docs.map((doc) => doc.data());
    return soundsData;
  };

  const { data, isError, isLoading, error } = useQuery(['filteredUserSounds'], getFilteredUserSounds, {
    retry: false,
  });

  if (isLoading) {
    return <MainSoundSkeleton />;
  }

  if (isError) {
    return !auth.currentUser ? (
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
            to access your uploads
          </p>
        </div>
      </>
    ) : (
      <div className={classes.errorbox}>
        <svg className={classes.svg}>
          <use xlinkHref={`${svg}#icon-alert-circle`}></use>
        </svg>
        <p className={classes.errorbox__message}>{error?.message || 'Something went wrong. Please try again later.'}</p>
      </div>
    );
  }

  return (
    <>
      {auth.currentUser && data.length === 0 && <p className={classes['main__sounds--empty']}>No uploads yet.</p>}

      {data.length !== 0 && <MainTitle title={'My Uploads'} link={null} />}

      <ul className={classes['main__sounds']}>
        {data.map(
          (sound) =>
            sound.imageSource &&
            sound.title &&
            sound.audioSource &&
            sound.id && (
              <MainSound
                key={sound?.id}
                imageSource={sound?.imageSource}
                title={sound?.title}
                audioSource={sound?.audioSource}
                artist={sound?.artist}
                pfp={sound?.pfp}
                id={sound?.id}
              />
            )
        )}
      </ul>
    </>
  );
};

export default FilteredUserSoundList;
