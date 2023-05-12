import React, { useState } from 'react';
import classes from './SignUp.module.scss';

import SignUpHeader from './SignUpHeader';
import SignUpForm from './SignUpForm';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

const SignUpPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <>
      {!isLoggedIn ? (
        <section className={classes.container}>
          <SignUpHeader />
          <SignUpForm />
        </section>
      ) : (
        <section className={classes.container}>
          <main className={classes.container__message}>
            <h1 className={classes.container__message__heading}>You are already signed in.</h1>
            <Link className={classes.link} to={'/'}>
              Go home
            </Link>
          </main>
        </section>
      )}
    </>
  );
};

export default SignUpPage;
