import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Success.module.scss';
import Confetti from 'react-confetti';

const Success = () => {
  return (
    <div className={classes.container}>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <div className={classes.container__box}>
        <h1 className={classes.container__header}>You have successfully registered!</h1>
        <p className={classes.container__paragraph}>You can now customize your profile and start using the app.</p>
        <div className={classes.container__link}>
          <Link to="/profile">Customize profile</Link>
          <Link to="/">Go back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
