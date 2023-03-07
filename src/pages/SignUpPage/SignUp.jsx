import React from 'react';
import classes from './SignUp.module.scss';

import SignUpHeader from './SignUpHeader';
import SignUpForm from './SignUpForm';

const SignUpPage = () => {
  return (
    <>
      <section className={classes.container}>
        <SignUpHeader />
        <SignUpForm />
      </section>
    </>
  );
};

export default SignUpPage;
