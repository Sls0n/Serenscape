import React, { useState, useEffect } from 'react';

import classes from './Profile.module.scss';
import svg from '../../assets/svg/sprite.svg';
import { auth } from '../../config/firebase-config';
import { storage } from '../../config/firebase-config';
import { ref, uploadBytes } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { v4 } from 'uuid';
import { PropagateLoader } from 'react-spinners';

const Profile = () => {
  console.log(auth.currentUser);

  const [imageUpload, setImageUpload] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (imageURL) {
      updateProfile(auth.currentUser, {
        photoURL: imageURL,
      })
        .then(() => {
          console.log('Profile updated!');
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [imageURL]);

  const fileChangeHandler = (e) => {
    setImageUpload(e.target.files[0]);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    if (imageUpload === null) return;
    setLoading(true);

    const storageRef = ref(storage, `profile/${imageUpload.name + v4()}`);
    uploadBytes(storageRef, imageUpload)
      .then(() => {
        getDownloadURL(storageRef)
          .then((url) => {
            setImageURL(url);
          })
          .catch((error) => {
            console.log(error);
          });

        setImageURL(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {auth.currentUser ? (
        <div className={classes.profile}>
          <h3 className={classes['profile__name']}>
            {auth.currentUser ? auth.currentUser.displayName : 'No username'}
          </h3>
          <p className={classes['profile__email']}>{auth.currentUser ? auth.currentUser.email : 'No email'}</p>
          <div className={classes['profile__pfp']}>
            <img
              src={
                auth.currentUser.photoURL
                  ? auth.currentUser.photoURL
                  : 'https://i.pinimg.com/originals/c9/0a/d7/c90ad748ff7e3287e52d138c6873d9c1.jpg'
              }
              alt="user"
            />
            <form className={classes['profile__submit']}>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={fileChangeHandler}
                className={classes['profile__file']}
              />
              <label htmlFor="file" className={classes['profile__label']}>
                <svg className={classes['profile__icon']}>
                  <use xlinkHref={`${svg}#icon-plus`}></use>
                </svg>
              </label>
              <button className={`${classes.btn} ${imageUpload ? '' : classes.disabled}`} onClick={uploadImage}>
                {loading ? (
                  <PropagateLoader
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                    color={'#fff'}
                    size={10}
                  />
                ) : (
                  'Upload'
                )}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className={classes.profile}>
          <h3 className={classes['profile__name']}>Sign in to customize profile</h3>
        </div>
      )}
    </>
  );
};

export default Profile;
