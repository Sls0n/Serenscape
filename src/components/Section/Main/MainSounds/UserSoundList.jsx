import React, { useState, useEffect } from 'react';

import MainSound from './MainSound';
import MainSoundSkeleton from './MainSoundSkeleton';

import classes from './UserSoundList.module.scss';

import { db } from '../../../../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';

const UserSoundList = () => {
  const [sounds, setSounds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSounds = async () => {
      try {
        setIsLoading(true);
        const data = await getDocs(collection(db, 'uploads'));
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
      {isLoading ? (
        <MainSoundSkeleton />
      ) : (
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
      )}
    </>
  );
};

export default React.memo(UserSoundList);