import React from 'react';
import UploadForm from './UploadForm';
import { getAuth } from 'firebase/auth';
import classes from './UploadSound.module.scss';
import svg from '../../assets/svg/sprite.svg';

const UploadSound = () => {
  const auth = getAuth();

  return (
    <>
      {auth.currentUser ? (
        <UploadForm />
      ) : (
        <>
          <div className={classes.errorbox}>
            <svg className={classes.svg}>
              <use xlinkHref={`${svg}#icon-alert-circle`}></use>
            </svg>
            <p className={classes.upload__message}>
              You need to{' '}
              <a href="/signin" className={classes.upload__link}>
                <span>sign in</span>
              </a>{' '}
              before you can upload.
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default UploadSound;
