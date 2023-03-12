import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import CommunityPage from './pages/Community';
import FavoritesPage from './pages/Favorites';
import UploadPage from './pages/Upload';
import SleepTimerPage from './pages/SleepTimer';
import SetGoalsPage from './pages/SetGoals';
import ProfilePage from './pages/Profile';
import SignInPage from './pages/SignInPage/SignIn';
import SignUpPage from './pages/SignUpPage/SignUp';
import Success from './pages/Success';

import Navigation from './components/Navigation/Navigation';
import Section from './components/Section/Section';
import Header from './components/Header/Header';
import Main from './components/Section/Main/Main';

import NavContext from './context/nav-context';
import ThemeContext from './context/theme-context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/community', element: <CommunityPage /> },
      { path: '/favorites', element: <FavoritesPage /> },
      { path: '/upload', element: <UploadPage /> },

      { path: '/timer', element: <SleepTimerPage /> },
      { path: '/goals', element: <SetGoalsPage /> },
      { path: '/profile', element: <ProfilePage /> },
    ],
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },

  {
    path: '/success',
    element: <Success />,
  },
]);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      <ThemeContext.Provider value={{ isDark, setDark }}>
        <RouterProvider router={router}>
          <Navigation />
          <Section>
            <Header />
            <Main />
          </Section>
        </RouterProvider>
      </ThemeContext.Provider>
    </NavContext.Provider>
  );
}

export default App;
