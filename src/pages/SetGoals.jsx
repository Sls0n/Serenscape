import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';

const SetGoalsPage = () => {
  return (
    <Section>
      <Header firstNav={'User'} secondNav={'Goals'} />

      <h1>My goals</h1>
      <ul>
        <li>Implement Signing In feature</li>
      </ul>
    </Section>
  );
};

export default SetGoalsPage;
