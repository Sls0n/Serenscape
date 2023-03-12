import React, { useState, useEffect } from 'react';

import MainSound from './MainSound';
import MainSoundSkeleton from './MainSoundSkeleton';

import classes from './MainSoundList.module.scss';

import { db } from '../../../../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';

import { useSelector, useDispatch } from 'react-redux';
import { isPlayingActions } from '../../../../store/playing';

const MainSoundList = () => {
  const dispatch = useDispatch();
  const currentSoundId = useSelector((state) => state.isPlaying.currentSoundId);
  const isPlaying = useSelector((state) => state.isPlaying.isPlaying);
  const [sounds, setSounds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const playClickHandler = () => {
    dispatch(isPlayingActions.setIsPlaying());
  };

  return (
    <>
      {isLoading ? (
        <MainSoundSkeleton />
      ) : (
        <ul className={classes['main__sounds']}>
          {sounds.map((sound) => (
            <MainSound
              key={sound.id}
              imageSource={sound.imageSource}
              title={sound.title}
              audioSource={sound.audioSource}
              onClick={playClickHandler}
              isPlaying={isPlaying && sound.id === currentSoundId}
              id={sound.id}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default MainSoundList;
