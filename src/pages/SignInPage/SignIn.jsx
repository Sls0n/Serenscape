import React, { useState } from 'react';

import classes from './SignIn.module.scss';
import SignInForm from './SignInForm';
import SignInHeader from './SignInHeader';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          <SignInHeader />
          <SignInForm />
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

export default SignInPage;
