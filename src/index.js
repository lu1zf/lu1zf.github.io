import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { data } from './data/data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App data={data.portuguese} lang="pt-br" />} />
        <Route exact path="en" element={<App data={data.english} lang="en-us" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
