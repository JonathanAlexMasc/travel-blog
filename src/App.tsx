import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import { Container } from 'react-bootstrap';
import BlogPage from './pages/BlogPage';
import ListBlogsPage from './pages/ListBlogsPage';
import ShowFooter from './components/Footer';

import { createBrowserRouter, Routes, Route, Link, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/listblogs/blog/:blogId" element={<BlogPage />} />
      <Route path="/listblogs" element={<ListBlogsPage />} />
    </Route>

  )
)

function App() {
  return (
    <div >
      <Navbar />
      <RouterProvider router={router} />
      <ShowFooter />
    </div>
  );
}

export default App;
