import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderUpEnd.module.scss';
import svg from '../../../assets/svg/sprite.svg';
import AuthButton from '../../Button/AuthButton';
import ThemeContext from '../../../context/theme-context';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';

const HeaderUpEnd = () => {
  const { isDark, setDark } = useContext(ThemeContext);
  const [isLogged, setIsLogged] = useState(false);

  const auth = getAuth();

  const clickHandler = (e) => {
    e.preventDefault();
    setDark(!isDark);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  }, [auth]);

  return (
    <div className={classes['header__up-end']}>
      <div className={classes['header__up-icons']}>
        <button className={classes.moon} onClick={clickHandler}>
          <svg className={classes['header__up-icon']}>
            <use xlinkHref={`${svg}#${isDark ? 'icon-sun' : 'icon-moon'}`}></use>
          </svg>
        </button>
        <Link to="/favorites" className={classes.favorites}>
          <svg className={classes['header__up-icon']}>
            <use xlinkHref={`${svg}#icon-heart`}></use>
          </svg>
        </Link>
        {/* <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          className={classes['header__up-volume']}
          onChange={() => {}}
        /> */}

        {isLogged ? (
          <div className={classes.user}>
            <div className={classes.user__pfp}>
              <img
                src={
                  auth.currentUser.photoURL
                    ? auth.currentUser.photoURL
                    : 'https://firebasestorage.googleapis.com/v0/b/serenscape-slson.appspot.com/o/defaulpfp.png?alt=media&token=9eade07b-673d-46c6-93b9-a4fe69c9c624'
                }
                alt="user"
              />
            </div>

            <div className={classes.user__dropdown}>
              <Link to={'/profile'} className={classes['user__dropdown-item']}>
                Profile
                <svg className={classes['user__dropdown-icon']}>
                  <use xlinkHref={`${svg}#icon-user`}></use>
                </svg>
              </Link>
              <Link to={'/upload'} className={classes['user__dropdown-item']}>
                Upload
                <svg className={classes['user__dropdown-icon']}>
                  <use xlinkHref={`${svg}#icon-music`}></use>
                </svg>
              </Link>
              <Link
                onClick={() => {
                  window.location.reload();
                  auth.signOut();
                  setIsLogged(false);
                }}
                className={classes['user__dropdown-item']}>
                Logout
                <svg className={classes['user__dropdown-icon']}>
                  <use xlinkHref={`${svg}#icon-log-out`}></use>
                </svg>
              </Link>
            </div>
          </div>
        ) : (
          <AuthButton
            onClick={
              auth.currentUser
                ? () => {}
                : () => {
                    window.location.href = '/signin';
                  }
            }
            text={
              <>
                <div className={classes['header__up-auth']}>
                  <span>Sign In</span>
                  <svg style={{}} className={classes['header__up-auth-btn']}>
                    <use xlinkHref={`${svg}#icon-log-in`}></use>
                  </svg>
                </div>
              </>
            }
          />
        )}
      </div>
    </div>
  );
};

export default HeaderUpEnd;
