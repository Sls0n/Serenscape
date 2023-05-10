import React from 'react';
import { useQuery } from '@tanstack/react-query';

import MainSound from './MainSound';
import MainSoundSkeleton from './MainSoundSkeleton';

import classes from './MainSoundList.module.scss';

import { db } from '../../../../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';

const MainSoundList = () => {
  const getMainSounds = async () => {
    const data = await getDocs(collection(db, 'sounds'));
    const soundsData = data.docs.map((doc) => doc.data());
    return soundsData;
  };

  const { data, isLoading, isError, error } = useQuery(['mainSounds'], getMainSounds);

  if (isLoading) {
    return <MainSoundSkeleton />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
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
              pfp={sound?.pfp}
              artist={sound?.artist}
              id={sound?.id}
            />
          )
      )}
    </ul>
  );
};

export default MainSoundList;
