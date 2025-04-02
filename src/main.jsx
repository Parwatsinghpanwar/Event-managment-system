import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "@material-tailwind/react";
import { FirebaseProvider } from './FirebaseContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <ThemeProvider>
        <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
        </HelmetProvider>
      </ThemeProvider>
    </FirebaseProvider>
  </React.StrictMode>,
);
