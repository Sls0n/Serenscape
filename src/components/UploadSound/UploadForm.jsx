import React, { useState, useEffect } from 'react';
import classes from './UploadForm.module.scss';

import { storage } from '../../config/firebase-config';
import { ref, uploadBytes } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import { db } from '../../../src/config/firebase-config';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { v4 } from 'uuid';

const UploadForm = () => {
  const auth = getAuth();

  const userId = auth.currentUser.uid;

  const [imageUpload, setImageUpload] = useState(null);
  const [musicUpload, setMusicUpload] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [musicURL, setMusicURL] = useState(null);
  const [title, setTitle] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const imageChangeHandler = (e) => {
    if (e.target.files[0].size > 5242880) {
      alert('File size must be less than 5MB');
      return;
    }

    setImageUpload(e.target.files[0]);
  };

  const musicChangeHandler = (e) => {
    if (e.target.files[0].size > 10485760) {
      alert('File size must be less than 10MB');
      return;
    }

    setMusicUpload(e.target.files[0]);
  };

  const uploadFiles = async (e) => {
    e.preventDefault();

    if (imageUpload === null || musicUpload === null) return;

    const imageStorageRef = ref(storage, `uthumbnails/${imageUpload.name + v4()}`);
    const musicStorageRef = ref(storage, `umusics/${musicUpload.name + v4()}`);

    uploadBytes(imageStorageRef, imageUpload)
      .then(() => {
        getDownloadURL(imageStorageRef)
          .then((url) => {
            setImageURL(url);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });

    uploadBytes(musicStorageRef, musicUpload).then(() => {
      getDownloadURL(musicStorageRef)
        .then((url) => {
          setMusicURL(url);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    if (imageURL && musicURL) {
      const uploadsCollectionRef = collection(db, 'uploads');

      await addDoc(uploadsCollectionRef, {
        imageSource: imageURL,
        title: title,
        audioSource: musicURL,
        id: v4(),
        userId: userId,
      });

      setImageURL(null);
      setMusicURL(null);
    }
  };

  return (
    <>
      <h1>UploadSound</h1>

      <form onSubmit={uploadFiles} action="submit">
        <label htmlFor="title">Title</label>
        <input onChange={titleChangeHandler} type="text" name="title" id="title" />

        <label htmlFor="image">Image</label>
        <input onChange={imageChangeHandler} type="file" name="image" id="image" accept="image/png, image/jpeg" />

        <label htmlFor="music">Music</label>
        <input onChange={musicChangeHandler} type="file" name="music" id="music" accept="audio/mpeg, audio/wav" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UploadForm;
