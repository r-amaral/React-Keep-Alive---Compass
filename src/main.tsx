import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './components/UI/GlobalStyle';
import AuthContextProvider from './common/context/AuthContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalStyle />
        <Router />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)



