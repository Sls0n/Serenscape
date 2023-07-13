import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ExplorePage from './pages/Explore';
import FavoritesPage from './pages/Favorites';
import UploadPage from './pages/Upload';
import SleepTimerPage from './pages/SleepTimer';
import MyUploads from './pages/MyUploads';
import ProfilePage from './pages/Profile';
import SignInPage from './pages/SignInPage/SignIn';
import SignUpPage from './pages/SignUpPage/SignUp';

import Navigation from './components/Navigation/Navigation';
import Section from './components/Section/Section';
import Header from './components/Header/Header';
import Main from './components/Section/Main/Main';

import NavContext from './context/nav-context';
import ThemeContext from './context/theme-context';
import AudioContextProvider from './context/audio-context';
import TimerContext from './context/timer-context';
import SelectedAudio from './pages/SelectedAudio';
import OfficialPage from './pages/Official';
import useLocalStorage from './hooks/useLocalStorage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/explore', element: <ExplorePage /> },
      { path: '/favorites', element: <FavoritesPage /> },
      { path: '/upload', element: <UploadPage /> },
      { path: '/official', element: <OfficialPage /> },

      { path: '/timer', element: <SleepTimerPage /> },
      { path: '/uploads', element: <MyUploads /> },
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
    path: '/audio/:id',
    element: <SelectedAudio />,
  },
]);

function App() {
  const [isOpen, setIsOpen] = useLocalStorage('isOpen', false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isDark, setDark] = useLocalStorage('isDark', true);

  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [time, setTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    // Trigger this function on resize
    window.addEventListener('resize', reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener('resize', reportWindowSize);
  }, [window.innerWidth]);

  useEffect(() => {
    if (windowWidth < 768) {
      setIsOpen(false);
    }
  }, [windowWidth]);

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
    <AudioContextProvider>
      <NavContext.Provider value={{ isOpen, setIsOpen, isMobile, setIsMobile }}>
        <TimerContext.Provider
          value={{
            hour,
            minute,
            setHour,
            setMinute,
            time,
            setTime,
            isRunning,
            setIsRunning,
          }}>
          <ThemeContext.Provider value={{ isDark, setDark }}>
            <RouterProvider router={router}>
              <Navigation />
              <Section>
                <Header />
                <Main />
              </Section>
            </RouterProvider>
          </ThemeContext.Provider>
        </TimerContext.Provider>
      </NavContext.Provider>
    </AudioContextProvider>
  );
}

export default App;
