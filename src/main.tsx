import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { createStore } from "redux";
import { initialState, rootReducer } from "./state/reducer/rootReducer";
import Toggle from "./state/toggle/Toggle";
import styled, { ThemeProvider } from "styled-components";
import theme from './styledComponents/theme/theme';



const store = createStore(rootReducer, initialState);

function App() {
  return (

      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <h1>Hello World</h1>
          <p>A simple toggle:</p>
          <Toggle />
        </ThemeProvider>
      </Provider>
 
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
