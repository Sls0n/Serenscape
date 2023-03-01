import React from 'react';

import NavigationLink from './NavigationLink';
import NavigationHeader from './NavigationHeader';
import classes from './NavigationLinkLists.module.scss';

const NAVIGATION_1 = [
  { name: 'Home', icon: 'icon-home' },
  { name: 'Community', icon: 'icon-search' },
  { name: 'Favorites', icon: 'icon-heart' },
  { name: 'Upload', icon: 'icon-plus-square' },
];

const NAVIGATION_2 = [
  { name: 'Sleep timer', icon: 'icon-clock' },
  { name: 'Set goals', icon: 'icon-edit' },
  { name: 'Notifications', icon: 'icon-bell' },
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
        <NavigationLink key={item.name} name={item.name} icon={item.icon} />
      ))}
      <NavigationHeader heading="User" />
      {NAVIGATION_2.map((item) => (
        <NavigationLink key={item.name} name={item.name} icon={item.icon} />
      ))}
      {NAVIGATION_3.map((item) => (
        <NavigationLink key={item.name} name={item.name} icon={item.icon} />
      ))}
    </ul>
  );
};

export default NavigationLinkLists;
