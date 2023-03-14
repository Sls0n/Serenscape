import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';

const ProfilePage = () => {
  return (
    <Section>
      <Header firstNav={'User'} secondNav={'Profile'} />
      <Profile />
    </Section>
  );
};

export default ProfilePage;
