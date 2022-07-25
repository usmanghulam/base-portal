import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import App from './App'
import './index.css'
import Theme from './views/theme/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>
);
