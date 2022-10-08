import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './components/UI/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
)



