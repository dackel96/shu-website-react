import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
