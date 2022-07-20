import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { createStore } from "redux";
import { initialState, rootReducer } from "./rootReducer";
import Toggle from "./Toggle";
import styled, { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/styles";
import Card from "@material-ui/core/Card";

const theme = {
  colors: {
    primary: "#0077B5",
    secondary: "#000000"
  }
};

const Wrapper = styled(Card)`
  padding: 4em;
  margin: auto;
  width: 70vw;
  background: ${props => props.theme.colors.primary};
`;

const store = createStore(rootReducer, initialState);

function App() {
  return (
    <StylesProvider>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Wrapper>
        <h1>Hello World</h1>
        <p>A simple toggle:</p>
        <Toggle />
        </Wrapper>
      </ThemeProvider>
    </Provider>
    </StylesProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
