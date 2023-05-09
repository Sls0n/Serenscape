import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import svg from '../assets/svg/sprite.svg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <Navigation />

      <Section>
        <Header firstNav={'Serenscape'} secondNav={'NOT_FOUND'} />
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2rem',
            }}>
            <svg
              style={{
                width: '14rem',
                height: '14rem',
                fill: '#DF3528',
              }}>
              <use xlinkHref={`${svg}#icon-alert-circle`}></use>
            </svg>
            <h1
              style={{
                color: '#999',
                fontSize: '4rem',
                fontWeight: '600',
                marginTop: '1rem',
              }}>
              404 ERROR!{' '}
            </h1>

            <p
              style={{
                color: '#ccc',
                fontSize: '2.5rem',
                marginTop: '1rem',
                fontWeight: '500',
              }}>
              The page you are looking for does not exist.{' '}
              <Link
                to={'/'}
                style={{
                  color: '#6461f8',
                  fontSize: '2.5rem',
                }}>
                Go home
              </Link>
            </p>
          </div>
        </>
      </Section>
    </>
  );
};

export default ErrorPage;
