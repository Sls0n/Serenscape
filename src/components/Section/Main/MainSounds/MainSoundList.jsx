import React, { useState, useEffect, useContext } from 'react';

import MainSound from './MainSound';
import MainSoundSkeleton from './MainSoundSkeleton';

import classes from './MainSoundList.module.scss';

import { storage } from '../../../../config/firebase-config';
import { db } from '../../../../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';

import PlayingContext from '../../../../context/playing-context';

const MainSoundList = () => {
  const [sounds, setSounds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isPlaying, setIsPlaying } = useContext(PlayingContext);

  console.log('is mounted');

  useEffect(() => {
    const getSounds = async () => {
      try {
        setIsLoading(true);
        const data = await getDocs(collection(db, 'sounds'));
        const sounds = data.docs.map((doc) => doc.data());
        setSounds(sounds);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getSounds();
  }, []);

  const soundsList = sounds.map((sound) => (
    <MainSound
      key={Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}
      // title={sound.title}
      // imageSource={sound.imageSource}
      // audioSource={sound.audioSource}
      onClick={() => {
        setIsPlaying(!isPlaying);
      }}
    />
  ));

  return (
    <>
      {isLoading ? (
        <>
          <MainSoundSkeleton />
        </>
      ) : (
        <ul className={classes['main__sounds']}>{soundsList}</ul>
      )}
    </>
  );
};

export default MainSoundList;
