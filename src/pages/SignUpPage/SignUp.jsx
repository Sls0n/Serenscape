import React, { useState } from 'react';
import classes from './SignUp.module.scss';

import SignUpHeader from './SignUpHeader';
import SignUpForm from './SignUpForm';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import Success from './Success';

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
        <Success />
      )}
    </>
  );
};

export default SignUpPage;
