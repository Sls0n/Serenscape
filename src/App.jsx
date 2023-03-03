import React, { useState } from 'react';
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

import NavContext from './context/NavContext';
import Navigation from './components/Navigation/Navigation';
import Section from './components/Section/Section';
import Header from './components/Header/Header';
import Main from './components/Section/Main/Main';

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
]);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      <RouterProvider router={router}>
        <Navigation />
        <Section>
          <Header />
          <Main />
        </Section>
      </RouterProvider>
    </NavContext.Provider>
  );
}

export default App;
