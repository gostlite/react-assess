import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import LoginComponent from './components/login/login';
import Dashboard from './components/dashboard/dashb';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);

