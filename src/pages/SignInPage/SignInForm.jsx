import React, { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import classes from './SignInForm.module.scss';
import { useForm } from 'react-hook-form';

import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { googleProvider } from '../../config/firebase-config';

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const id = useId();

  const navigate = useNavigate();

  const auth = getAuth();

  const signInUser = async (data) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);

      navigate('/');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setErrorMessage('User does not exist!');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage('The password is invalid!');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signInGoogle = async () => {
    try {
      setIsGoogleLoading(true);
      await signInWithPopup(auth, googleProvider);

      navigate('/');

      setIsGoogleLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmit = (data) => {
    signInUser(data);
  };

  return (
    <main className={classes.main}>
      <div className={classes.main__textbox}>
        <h1 className={classes.main__title}>Log in</h1>
      </div>

      <form action="submit" className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        {errorMessage && <p className={classes.form__error}>{errorMessage}</p>}
        <div className={classes.form__group}>
          <label htmlFor={`${id}-email`} className={classes.form__label}>
            Email
          </label>
          <input
            {...register('email', {
              required: { value: true, message: 'Email is required' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            id={`${id}-email`}
            className={`${classes.form__input} ${errors.email && classes.error}`}
            placeholder="Enter your email"
          />
          {errors.email && <p className={classes.form__error}>{errors.email.message}</p>}
        </div>

        <div className={classes.form__group}>
          <label htmlFor={`${id}-password`} className={classes.form__label}>
            Password
          </label>
          <input
            {...register('password', {
              required: { value: true, message: 'Password is required' },
            })}
            type="password"
            id={`${id}-password`}
            className={`${classes.form__input} ${errors.password && classes.error}`}
            placeholder="Create a password"
          />
          {errors.password && <p className={classes.form__error}>{errors.password.message}</p>}
        </div>

        <button className={classes.btn}>
          {isLoading ? (
            <PropagateLoader
              color="#f2f2f2"
              size={15}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      <div className={classes.main__textbox}>
        <p className={classes.main__description}>Or</p>
      </div>

      <button onClick={signInGoogle} className={classes['btn-2']}>
        {isGoogleLoading ? (
          <PropagateLoader
            color="#333333e0"
            size={15}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        ) : (
          <div className={classes.btnImg}>
            <div className={classes.img}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/32px-Google_%22G%22_Logo.svg.png"
                alt=""
              />
            </div>
            <p>Continue with Google</p>
          </div>
        )}
      </button>

      <Link to="/signup" className={classes.form__link}>
        Don't have an account?
      </Link>
    </main>
  );
};

export default SignInForm;
