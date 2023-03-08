import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderUpEnd.module.scss';
import svg from '../../../assets/svg/sprite.svg';
import AuthButton from '../../Button/AuthButton';
import ThemeContext from '../../../context/theme-context';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

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
        <div className={classes.volume}>
          <svg className={classes['header__up-icon']}>
            <use xlinkHref={`${svg}#icon-volume-2`}></use>
          </svg>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          className={classes['header__up-volume']}
          onChange={() => {}}
        />

        {isLogged ? (
          <div className={classes.user}>
            <img
              src={
                'https://yt3.googleusercontent.com/Pt0qgndozm7ssgyu5pyQ4hgpZ5giIl7B2viR3Q8APutWYMNxFMHye0QJkyVxvFLkuOXrzStsRw=s900-c-k-c0x00ffffff-no-rj'
              }
              alt="user"
              className={classes['user__pfp']}
            />

            <div className={classes.user__dropdown}>
              <div className={classes['user__dropdown-item']}>
                Profile
                <svg className={classes['user__dropdown-icon']}>
                  <use xlinkHref={`${svg}#icon-user`}></use>
                </svg>
              </div>
              <div
                onClick={() => {
                  auth.signOut();
                }}
                className={classes['user__dropdown-item']}>
                Logout
                <svg className={classes['user__dropdown-icon']}>
                  <use xlinkHref={`${svg}#icon-log-out`}></use>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <AuthButton text={'Sign In -->'} to={'/signin'} />
        )}
      </div>
    </div>
  );
};

export default HeaderUpEnd;
