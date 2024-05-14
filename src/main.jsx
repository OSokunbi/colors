import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastProvider } from './Toast';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);
