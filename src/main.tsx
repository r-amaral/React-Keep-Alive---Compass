import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import 'normalize.css';
import './index.css';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Login /> */}
    <Home />
  </React.StrictMode>
)
