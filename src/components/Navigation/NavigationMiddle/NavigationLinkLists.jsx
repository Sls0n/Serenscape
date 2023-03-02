import React from 'react';

import NavigationLink from './NavigationLink';
import NavigationHeader from './NavigationHeader';
import classes from './NavigationLinkLists.module.scss';

const NAVIGATION_1 = [
  { name: 'Home', icon: 'icon-home', link: '/' },
  { name: 'Community', icon: 'icon-search', link: '/community' },
  { name: 'Favorites', icon: 'icon-heart', link: '/favorites' },
  { name: 'Upload', icon: 'icon-plus-square', link: '/upload' },
];

const NAVIGATION_2 = [
  { name: 'Sleep timer', icon: 'icon-clock', link: '/timer' },
  { name: 'Set goals', icon: 'icon-edit', link: '/goals' },
  { name: 'Profile', icon: 'icon-camera', link: '/profile' },
];

const NAVIGATION_3 = [
  { name: 'Dark mode', icon: 'icon-moon' },
  { name: 'Settings', icon: 'icon-settings' },
];

const NavigationLinkLists = () => {
  return (
    <ul className={classes['aside__lists']}>
      <NavigationHeader heading="Navigation" />
      {NAVIGATION_1.map((item) => (
        <NavigationLink key={item.name} name={item.name} icon={item.icon} link={item.link} />
      ))}

      <NavigationHeader heading="User" />
      {NAVIGATION_2.map((item) => (
        <NavigationLink key={item.name} name={item.name} icon={item.icon} link={item.link} />
      ))}

      {NAVIGATION_3.map((item) => (
        <NavigationLink key={item.name} name={item.name} icon={item.icon} />
      ))}
    </ul>
  );
};

export default NavigationLinkLists;
