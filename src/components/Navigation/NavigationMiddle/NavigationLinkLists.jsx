import React, { useContext } from 'react';

import NavigationLink from './NavigationLink';
import NavigationHeader from './NavigationHeader';
import classes from './NavigationLinkLists.module.scss';
import NavigationLinkLast from './NavigationLinkLast';
import Button from '../../Button/Button';
import svg from '../../../assets/svg/sprite.svg';

import NavContext from '../../../context/nav-context';
import ThemeContext from '../../../context/theme-context';
import { getAuth } from 'firebase/auth';

const NAVIGATION_1 = [
  { name: 'Home', icon: 'icon-home', link: '/' },
  { name: 'Explore', icon: 'icon-headphones', link: '/explore' },
  { name: 'Favorites', icon: 'icon-heart', link: '/favorites' },
  { name: 'Upload', icon: 'icon-plus-square', link: '/upload' },
];

const NAVIGATION_2 = [
  { name: 'Profile', icon: 'icon-award', link: '/profile' },
  { name: 'Timer', icon: 'icon-clock', link: '/timer' },
  { name: 'Set goals', icon: 'icon-edit', link: '/goals' },
];

const NavigationLinkLists = () => {
  const { isOpen } = useContext(NavContext);
  const { isDark, setDark } = useContext(ThemeContext);

  const auth = getAuth();

  const clickHandler = () => {
    setDark(!isDark);
  };

  return (
    <ul className={classes['aside__lists']}>
      {!isOpen && <NavigationHeader heading="Navigation" />}
      {NAVIGATION_1.map((item) => (
        <NavigationLink
          key={Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}
          name={item.name}
          icon={item.icon}
          link={item.link}
        />
      ))}

      {!isOpen && <NavigationHeader heading="User settings" />}
      {NAVIGATION_2.map((item) => (
        <NavigationLink
          key={Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}
          name={item.name}
          icon={item.icon}
          link={item.link}
        />
      ))}

      {isDark ? (
        <NavigationLinkLast onClick={clickHandler} name="Light mode" icon="icon-sun" />
      ) : (
        <NavigationLinkLast onClick={clickHandler} name="Dark mode" icon="icon-moon" />
      )}
      <NavigationLinkLast onClick={() => {}} name="Settings" icon="icon-settings" />

      {!isOpen && (
        <Button
          onClick={
            auth.currentUser
              ? () => {
                  window.location.reload();
                  auth.signOut();
                }
              : () => {
                  window.location.href = '/signup';
                }
          }
          text={
            <>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                }}
                className={classes['header__up-auth']}>
                {auth.currentUser ? 'Exit account' : 'Create an account'}
                <svg
                  style={{
                    width: '2rem',
                    height: '2rem',
                    fill: '#f2f2f2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className={classes['header__up-auth-btn']}>
                  <use xlinkHref={`${svg}#icon-${auth.currentUser ? 'log-out' : 'chevron-right'}`}></use>
                </svg>
              </div>
            </>
          }
        />
      )}
    </ul>
  );
};

export default NavigationLinkLists;
