import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Main } from './page';

// all this needs to go
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
