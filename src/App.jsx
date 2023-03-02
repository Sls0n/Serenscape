import React from 'react';
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
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
