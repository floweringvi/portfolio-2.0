import React from 'react'

import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
import AboutMe from './pages/AboutMe';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index:true,
                element: <AboutMe />,
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path: '/projects',
                element: <Portfolio />
            },
           
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  ); 