import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';

const SleepTimerPage = () => {
  console.log('SleepTimerPage');

  return (
    <Section>
      <Header firstNav={'User'} secondNav={'Timer'} />
    </Section>
  );
};

export default SleepTimerPage;
