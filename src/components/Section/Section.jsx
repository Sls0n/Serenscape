import React, { useContext } from 'react';

import classes from './Section.module.scss';
import NavContext from '../../context/nav-context';

const Section = ({ children }) => {
  const { isOpen } = useContext(NavContext);

  return <section className={!isOpen ? classes.section : classes.close}>{children}</section>;
};

export default Section;
