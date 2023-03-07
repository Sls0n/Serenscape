import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SetGoalsPage = () => {
  return (
    <Section>
      <Header firstNav={'User'} secondNav={'Goals'} />

      <h1>
        {'TItle'} || <Skeleton />
      </h1>
      <ul>
        <li>Implement Signing In feature</li>
      </ul>
    </Section>
  );
};

export default SetGoalsPage;
