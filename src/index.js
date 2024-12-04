import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import {TelegramAuth} from "./components/Base_Logic/TelegramAuth.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <TelegramAuth>
          <App />
      </TelegramAuth>
  </React.StrictMode>
);


