import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LocalStorage from 'storages/LocalStorage';
import HttpClient from 'httpClient/httpClient';
import CatServiceImplement from 'services/CatService';
import CatProvider from 'contexts/CatContext';
import App from './App';

const BASE_URL = 'https://cataas.com/';
const storage = new LocalStorage();
const httpClient = new HttpClient(BASE_URL, storage);
const catService = new CatServiceImplement(httpClient, storage);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <CatProvider catService={catService}>
    <App />
  </CatProvider>,
);
