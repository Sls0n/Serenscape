import React, { useState, useEffect } from 'react';
import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import Main from '../components/Section/Main/Main';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const HomePage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthFetched, setIsAuthFetched] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthFetched(true);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <>
      {isAuthFetched ? (
        <Section>
          <Header firstNav={'Navigation'} secondNav={'Home'} />
          <Main />
        </Section>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            position: 'absolute',

            zIndex: '1000000',
          }}>
          {' '}
          Loading...{' '}
        </div>
      )}
    </>
  );
};

export default HomePage;
