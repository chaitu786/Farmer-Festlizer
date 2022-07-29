import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { positions, Provider as Providers } from "react-alert";
import AlertTemplate from 'react-alert-template-basic'
import { store } from './Redux/Store';

const breakpoints = {
  sm: '430px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};
const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E"
  }
};

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

const theme = extendTheme({ breakpoints,colors })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Providers template={AlertTemplate} {...options}>
      <Provider store={store}>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
      </Provider>
    </Providers>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
