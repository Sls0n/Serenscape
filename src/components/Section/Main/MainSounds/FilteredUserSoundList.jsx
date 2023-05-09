import React, { useState, useEffect } from 'react';

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
  const [sounds, setSounds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const uploadsCollectionRef = collection(db, 'uploads');

  useEffect(() => {
    const getSounds = async () => {
      try {
        if (!auth.currentUser) throw new Error('You must be logged in to access your uploads');

        setIsLoading(true);
        const userId = auth.currentUser.uid;
        const q = query(uploadsCollectionRef, where('userId', '==', userId));
        const data = await getDocs(q);

        const soundsData = data.docs.map((doc) => doc.data());

        setSounds(soundsData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getSounds();
  }, []);

  return (
    <>
      {auth.currentUser && sounds.length === 0 && <p className={classes['main__sounds--empty']}>No uploads yet.</p>}

      {sounds.length !== 0 && <MainTitle title={'My Uploads'} link={null} />}

      {isLoading ? (
        <MainSoundSkeleton />
      ) : (
        <>
          {!auth.currentUser ? (
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
            <>
              <ul className={classes['main__sounds']}>
                {sounds.map(
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
          )}
        </>
      )}
    </>
  );
};

export default FilteredUserSoundList;
