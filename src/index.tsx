import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from "styled-components";
import theme from "./theme/theme";
import './assests/scss/layout.scss'

import CompanySearch from './pages/CompanySearch';
import PageNotFound from './pages/PageNotFound';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Typography} from "@mui/material";
import Header from "./layout/Header";
import Page from "./layout/Page";
import Box from "@mui/material/Box";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CompanySearch />,
    }, {
        path: "*",
        element: <PageNotFound />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Box className="layout-wrapper">
                <CssBaseline />
                <Header />
                <Page>
                    <RouterProvider router={router} />
                </Page>
            </Box>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
