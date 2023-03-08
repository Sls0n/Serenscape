import React from 'react';
import classes from './SignUp.module.scss';

import SignUpHeader from './SignUpHeader';
import SignUpForm from './SignUpForm';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate('/success');
    }
  });

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
