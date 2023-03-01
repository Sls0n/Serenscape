import React from 'react';

import classes from './Section.module.scss';
import Header from './Header/Header';
import Main from './Main/Main';

const Section = () => {
  return (
    <section className={classes.section}>
      <Header />
      <Main />
    </section>
  );
};

export default Section;
