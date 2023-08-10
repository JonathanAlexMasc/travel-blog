import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import BlogPage from './pages/BlogPage';
import ListBlogsPage from './pages/ListBlogsPage';
import Footer from './components/Footer';
import "./App.css";

import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='*' element={<NotFound />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/listblogs/blog/:blogId" element={<BlogPage />} />
      <Route path="/listblogs" element={<ListBlogsPage />} />
    </Route>

  )
)

function App() {
  return (
    <div className='d-flex flex-column mh-100'>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
