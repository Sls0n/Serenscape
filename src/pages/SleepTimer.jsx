import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import TimerForm from '../components/Timer/TimerForm';

const SleepTimerPage = () => {
  return (
    <Section>
      <Header firstNav={'Serenscape'} secondNav={'Timer'} />
      <TimerForm />
    </Section>
  );
};

export default SleepTimerPage;
