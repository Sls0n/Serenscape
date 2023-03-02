import React from 'react';

import classes from './Section.module.scss';

const Section = ({ children }) => {
  return <section className={classes.section}>{children}</section>;
  // Passed in a children prop to use 'Header' and 'Main' components separately
};

export default Section;
