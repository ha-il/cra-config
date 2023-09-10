import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LocalStorage from 'storages/LocalStorage';
import HttpClient from 'httpClient/httpClient';
import AuthServiceImplement from 'services/AuthSerivce';
import AuthProvider from 'contexts/AuthContext';
import App from './App';

const BASE_URL = 'http://localhost:8000/';
const storage = new LocalStorage();
const httpClient = new HttpClient(BASE_URL, storage);
const authService = new AuthServiceImplement(httpClient, storage);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <AuthProvider authService={authService}>
    <App />
  </AuthProvider>,
);
