import React from 'react';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      &copy; 2023{' '}
      <span>
        <a
          style={{ color: '#5950d6', textDecoration: 'none' }}
          href="
        https://serenscape.netlify.app
        ">
          &nbsp;Serenscape
        </a>
      </span>
      . All rights reserved.
    </footer>
  );
};

export default Footer;
