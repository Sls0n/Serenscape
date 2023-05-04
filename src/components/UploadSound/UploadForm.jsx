import React, { useEffect, useState } from 'react';
import classes from './UploadForm.module.scss';

import { storage } from '../../config/firebase-config';
import { ref, uploadBytes } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import { db } from '../../../src/config/firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { v4 } from 'uuid';
import { useForm } from 'react-hook-form';
import svg from '../../assets/svg/sprite.svg';
import { PropagateLoader } from 'react-spinners';

const UploadForm = () => {
  const auth = getAuth();

  const userId = auth.currentUser.uid;

  const [imageUpload, setImageUpload] = useState(null);
  const [musicUpload, setMusicUpload] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [musicURL, setMusicURL] = useState(null);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const uploadFiles = async () => {
    if (imageUpload === null || musicUpload === null) return;

    setIsLoading(true);

    const imageStorageRef = ref(storage, `uthumbnails/${imageUpload.name + v4()}`);
    const musicStorageRef = ref(storage, `umusics/${musicUpload.name + v4()}`);

    uploadBytes(imageStorageRef, imageUpload)
      .then(() => {
        getDownloadURL(imageStorageRef)
          .then((url) => {
            setImageURL(url);
          })
          .catch((error) => {
            setErrorMessage(error.message);
            console.log(error);
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error);
      });

    uploadBytes(musicStorageRef, musicUpload).then(() => {
      getDownloadURL(musicStorageRef)
        .then((url) => {
          setMusicURL(url);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error);
        });
    });
  };

  useEffect(() => {
    if (imageURL && musicURL) {
      const uploadsCollectionRef = collection(db, 'uploads');

      addDoc(uploadsCollectionRef, {
        imageSource: imageURL,
        title: title,
        audioSource: musicURL,
        artist: auth.currentUser?.displayName,
        pfp: auth.currentUser?.photoURL,
        id: v4(),
        userId: userId,
      })
        .then(() => {
          console.log('Document successfully written!');
        })
        .catch((error) => {
          console.error('Error writing document: ', error);
          setErrorMessage(error.message);
        });

      setImageUpload(null);
      setMusicUpload(null);

      setImageURL(null);
      setMusicURL(null);
      setTitle('');

      document.getElementById('title').value = '';
      document.getElementById('image').value = '';
      document.getElementById('music').value = '';

      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageURL, musicURL]);

  return (
    <>
      <h1 className={classes.header}>Upload Sound</h1>

      <form className={classes.form} action="submit" onSubmit={handleSubmit(uploadFiles)}>
        {errorMessage && <p className={classes.form__error}>{errorMessage}</p>}
        <label className={classes.form__label} htmlFor="title">
          Title
        </label>
        <input
          {...register('title', {
            required: {
              value: true,
              message: 'Title is required',
            },
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters long',
            },
            maxLength: {
              value: 25,
              message: 'Title must be less than 25 characters long',
            },
          })}
          className={`${classes.form__input} ${errors.title && classes.error}`}
          onChange={titleChangeHandler}
          type="text"
          name="title"
          id="title"
          placeholder="Enter suitable title"
        />
        {errors.title && <p className={classes.form__error}>{errors.title.message}</p>}

        <label className={classes.form__label} htmlFor="image">
          Upload image
        </label>
        <label className={`${classes.imageLabel} ${errors.image && classes.error}`} htmlFor="image">
          {imageUpload ? (
            <svg>
              <use xlinkHref={`${svg}#icon-check`}></use>
            </svg>
          ) : (
            <p>
              Select a image file <span>(.jpeg, .png)</span>
            </p>
          )}
        </label>
        <input
          {...register('image', {
            required: {
              value: true,
              message: 'Image is required',
            },
          })}
          className={classes.form__input}
          onChange={imageChangeHandler}
          type="file"
          name="image"
          id="image"
          accept="image/png, image/jpeg"
        />
        {errors.image && <p className={classes.form__error}>{errors.image.message}</p>}

        <label className={classes.form__label} htmlFor="music">
          Upload music
        </label>
        <label className={`${classes.musicLabel} ${errors.music && classes.error}`} htmlFor="music">
          {musicUpload ? (
            <svg>
              <use xlinkHref={`${svg}#icon-check`}></use>
            </svg>
          ) : (
            <p>
              Select a music file <span>(.mp3, .wav)</span>{' '}
            </p>
          )}
        </label>
        <input
          {...register('music', {
            required: {
              value: true,
              message: 'Music is required',
            },
          })}
          onChange={musicChangeHandler}
          type="file"
          name="music"
          id="music"
          accept="audio/mpeg, audio/wav"
        />
        {errors.music && <p className={classes.form__error}>{errors.music.message}</p>}

        <button className={classes.btn}>
          {isLoading ? (
            <PropagateLoader
              color="#f2f2f2"
              size={15}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          ) : (
            'Upload audio'
          )}
        </button>
      </form>
    </>
  );
};

export default UploadForm;
