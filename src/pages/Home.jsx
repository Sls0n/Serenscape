import React from 'react';
import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import Main from '../components/Section/Main/Main';

const HomePage = () => {
  return (
    <>
      <Section>
        <Header firstNav={'Navigation'} secondNav={'Home'} />
        <Main />
      </Section>
    </>
  );
};

export default HomePage;
