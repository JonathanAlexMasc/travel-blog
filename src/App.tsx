import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import BlogPage from './pages/BlogPage';
import ListBlogsPage from './pages/ListBlogsPage';
import NavScrollExample from './components/Footer';

import { createBrowserRouter, Routes, Route, Link, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/listblogs/blog/:blogId" element={<BlogPage />} />
      <Route path="/listblogs" element={<ListBlogsPage />} />
    </Route>

  )
)

function App() {
  return (
    <div className='d-flex flex-column'>
      <div className='mb-auto'>
        <Navbar />
        <RouterProvider router={router} />
      </div>
      <div className='mt-auto'>
        <NavScrollExample />
      </div>
    </div>
  );
}

export default App;
