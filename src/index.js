import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';

const theme = createMuiTheme({})

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={1} anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
