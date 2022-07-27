import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import addLinksToHead from './config/links/Links'
import Theme from "./views/theme";

/**
 * dynamically add fonts and stylesheets to head tag
 */
addLinksToHead()

/**
 * Index configured for Material-UI with styled components
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </StyledEngineProvider>,
)
