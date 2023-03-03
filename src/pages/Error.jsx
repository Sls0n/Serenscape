import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';

const ErrorPage = () => {
  return (
    <>
      <Navigation />

      <Section>
        <Header firstNav={'Navigation'} secondNav={'NOT_FOUND'} />
      </Section>
    </>
  );
};

export default ErrorPage;
