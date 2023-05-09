import React, { useState, useEffect } from 'react';

import MainSound from './MainSound';
import MainSoundSkeleton from './MainSoundSkeleton';
import MainTitle from '../MainTitle';

import classes from './UserSoundList.module.scss';

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
      <MainTitle title={'My Uploads'} />

      {isLoading ? (
        <MainSoundSkeleton />
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
  );
};

export default FilteredUserSoundList;
