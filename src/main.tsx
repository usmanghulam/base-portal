import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Theme from './views/theme/Theme'
import addLinksToHead from './config/links/Links'

/**
 * dynamically add fonts and stylesheets to head tag
 */
addLinksToHead()

/**
 * Theme configured for Material-UI with styled components
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </StyledEngineProvider>,
)
