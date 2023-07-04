import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import { getAuth, onAuthStateChanged, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { PropagateLoader } from 'react-spinners';
import NavigationMobile from '../components/Navigation/NavigationMobile';

const loaderStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '1000',
};

const RootLayout = () => {
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

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence);
  }, [auth]);

  return (
    <>
      <PropagateLoader color="#5950d6" height={50} width={15} loading={!isAuthFetched} style={loaderStyle} />

      {isAuthFetched && (
        <>
          <Navigation />
          <NavigationMobile />
          <Outlet />
        </>
      )}
    </>
  );
};

export default RootLayout;
