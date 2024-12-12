import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//Router setting
import { BrowserRouter } from 'react-router-dom'//BrowserRouter, HashRouter, MemoryRouter
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode >
);

reportWebVitals();
