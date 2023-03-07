import React from 'react';

import classes from './SignIn.module.scss';
import SignInForm from './SignInForm';
import SignInHeader from './SignInHeader';

const SignInPage = () => {
  return (
    <section className={classes.container}>
      <SignInHeader />
      <SignInForm />
    </section>
  );
};

export default SignInPage;
