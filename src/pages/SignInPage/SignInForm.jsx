import React, { useId } from 'react';
import { Link } from 'react-router-dom';
import classes from './SignInForm.module.scss';
import { useForm } from 'react-hook-form';

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const id = useId();
  return (
    <main className={classes.main}>
      <div className={classes.main__textbox}>
        <h1 className={classes.main__title}>Hey! welcome back.</h1>
        <p className={classes.main__description}>To continue</p>
      </div>

      <form action="submit" className={classes.form} onSubmit={handleSubmit((data) => console.log(data))}>
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
        </div>
        <div className={classes.form__group}>
          <label htmlFor={`${id}-password`} className={classes.form__label}>
            Password
          </label>
          <input
            {...register('password', {
              required: { value: true, message: 'Password is required' },
            })}
            id={`${id}-password`}
            className={`${classes.form__input} ${errors.password && classes.error}`}
            placeholder="Enter the password"
          />
        </div>
        <button className={classes.btn}>Sign In</button>
      </form>
      <Link to="/signup" className={classes.form__link}>
        Don't have an account?
      </Link>
    </main>
  );
};

export default SignInForm;
