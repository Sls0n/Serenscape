import React, { useState, useEffect } from 'react';
import MainSound from './MainSound';

import classes from './MainSoundList.module.scss';

import { storage } from '../../../../config/firebase-config';
import { db } from '../../../../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';

const MainSoundList = () => {
  const [sounds, setSounds] = useState([]);

  useEffect(() => {
    const getSounds = async () => {
      try {
        const data = await getDocs(collection(db, 'sounds'));
        const sounds = data.docs.map((doc) => doc.data());
        console.log(sounds);
        setSounds(sounds);
      } catch (error) {
        console.log(error);
      }
    };

    getSounds();
  }, []);

  return (
    <ul className={classes['main__sounds']}>
      {sounds.map((sound) => (
        <MainSound
          key={sound.title}
          title={sound.title}
          imageSource={sound.imageSource}
          audioSource={sound.audioSource}
        />
      ))}
    </ul>
  );
};

export default MainSoundList;
