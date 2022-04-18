import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { data } from './data/data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App data={data.portuguese} lang="pt-br" />} />
        <Route path="en" element={<App data={data.english} lang="en-us" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
