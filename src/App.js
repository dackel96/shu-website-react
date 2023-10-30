import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/components/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

const path = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: '/services',
    element: (
      <>
        <Navbar />
        <Services />
      </>
    ),
  },
  {
    path: '/products',
    element: (
      <>
        <Navbar />
        <Products />
      </>
    ),
  },
  {
    path: '/sign-up',
    element: (
      <>
        <Navbar />
        <SignUp />
      </>
    ),
  },
]);
export const App = () => {
  return (
    <>
      <RouterProvider router={path} />
    </>
  );
};

export default App;
