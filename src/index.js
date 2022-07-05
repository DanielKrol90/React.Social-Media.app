import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
// Routers
import HomePage from './routes/HomePage';
import LogInPage from './routes/LogInPage';
import SignUpPage from './routes/HomePage';
// End of Routers

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='HomePage' element={<HomePage />} />
        <Route path='LogInPage' element={<LogInPage />} />
        <Route path='SignUpPage' element={<SignUpPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
