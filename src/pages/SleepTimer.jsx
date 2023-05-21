import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import Timer from '../components/Timer/Timer';

const SleepTimerPage = () => {
  console.log('SleepTimerPage');

  return (
    <Section>
      <Header firstNav={'Serenscape'} secondNav={'Timer'} />
      <Timer />
    </Section>
  );
};

export default SleepTimerPage;
