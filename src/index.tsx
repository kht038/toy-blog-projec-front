import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from 'assets/styles/theme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import App from './pages/app';

interface Iglobal {
  whiteColor: boolean;
}

const GlobalStyle = createGlobalStyle<Iglobal>`
  body {
    margin: 0;
    color: ${(props) => (props.whiteColor ? 'white' : 'black')};
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <GlobalStyle whiteColor />
    <ThemeProvider theme={theme}>
      <App title="테스트" color="red" />
    </ThemeProvider>
  </React.StrictMode>,
);
