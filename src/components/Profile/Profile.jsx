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
import { getFirestore, updateDoc, query, where, getDocs, collection } from 'firebase/firestore';

import Notification from '../Notification/Notification';
import useNotification from '../../hooks/useNotification';

const Profile = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const { state, renderNotification, removeNotification } = useNotification();

  const db = getFirestore();

  useEffect(() => {
    if (imageURL) {
      const updatePfp = async () => {
        try {
          const uploadsCollectionRef = collection(db, 'uploads');
          const usersCollectionRef = collection(db, 'users');

          const q = query(uploadsCollectionRef, where('userId', '==', auth.currentUser.uid));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            updateDoc(doc.ref, {
              pfp: imageURL,
            });
          });

          const q2 = query(usersCollectionRef, where('userId', '==', auth.currentUser.uid));
          const querySnapshot2 = await getDocs(q2);
          querySnapshot2.forEach((doc) => {
            updateDoc(doc.ref, {
              pfp: imageURL,
            });
          });
        } catch (error) {
          console.log(error);
          renderNotification('Error updating profile picture', 'error');
        }
      };

      updatePfp();
      updateProfile(auth.currentUser, {
        photoURL: imageURL,
      })
        .then(() => {
          console.log('Profile updated!');
          renderNotification('Profile picture updated!', 'success');
          setLoading(false);
          setImageUpload(null);
        })
        .catch((error) => {
          console.log(error);
          renderNotification('Error updating profile picture', 'error');
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageURL]);

  const fileChangeHandler = (e) => {
    setImageUpload(e.target.files[0]);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    if (imageUpload === null) {
      renderNotification('Please select an image', 'error');
      return;
    }
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
            renderNotification('Error uploading profile picture', 'error');
          });

        setImageURL(null);
      })
      .catch((error) => {
        console.log(error);
        renderNotification('Error uploading profile picture', 'error');
      });
  };

  return (
    <>
      <Notification
        open={state.showNotification}
        closeFn={removeNotification}
        message={state.notificationMessage}
        status={state.notificationStatus}
      />
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
              to view your profile
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
