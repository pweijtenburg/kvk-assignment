import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import router from "./router/router";
import {Provider} from "react-redux"
import store from "./store/store";
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from "styled-components";
import theme from "./theme/theme";
import './assests/scss/layout.scss'
import reportWebVitals from './reportWebVitals';
import Box from "@mui/material/Box";
import Header from "./layout/Header";
import Page from "./layout/Page";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Box className="layout-wrapper">
                    <CssBaseline />
                    <Header />
                    <Page>
                        <RouterProvider router={router} />
                    </Page>
                </Box>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
