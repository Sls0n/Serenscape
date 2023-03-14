import React from 'react';

import classes from './Button.module.scss';

const Button = ({ text, onClick = () => {} }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button onClick={clickHandler} className={classes.btn}>
      {text}
    </button>
  );
};

export default Button;
