import React, { useContext } from 'react';

import NavigationLink from './NavigationLink';
import NavigationHeader from './NavigationHeader';
import classes from './NavigationLinkLists.module.scss';
import NavigationLinkLast from './NavigationLinkLast';
import Button from '../../Button/Button';
import NavContext from '../../../context/NavContext';

const NAVIGATION_1 = [
  { name: 'Home', icon: 'icon-home', link: '/' },
  { name: 'Community', icon: 'icon-search', link: '/community' },
  { name: 'Favorites', icon: 'icon-heart', link: '/favorites' },
  { name: 'Upload', icon: 'icon-plus-square', link: '/upload' },
];

const NAVIGATION_2 = [
  { name: 'Sleep timer', icon: 'icon-clock', link: '/timer' },
  { name: 'Set goals', icon: 'icon-edit', link: '/goals' },
  { name: 'Profile', icon: 'icon-award', link: '/profile' },
];

const NavigationLinkLists = () => {
  const { isOpen } = useContext(NavContext);

  return (
    <ul className={classes['aside__lists']}>
      {!isOpen && <NavigationHeader heading="Navigation" />}
      {NAVIGATION_1.map((item) => (
        <NavigationLink key={item.name} name={item.name} icon={item.icon} link={item.link} />
      ))}

      {!isOpen && <NavigationHeader heading="Navigation" />}
      {NAVIGATION_2.map((item) => (
        <NavigationLink key={item.name} name={item.name} icon={item.icon} link={item.link} />
      ))}

      <NavigationLinkLast name="Dark mode" icon="icon-moon" />
      <NavigationLinkLast name="Settings" icon="icon-settings" />

      {!isOpen ? <Button value={'Create a account -->'} /> : <Button value={'-->'} />}
    </ul>
  );
};

export default NavigationLinkLists;
