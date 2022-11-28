import React from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import router from "./router/router";
import {Provider} from "react-redux"
import store from "./store/store";
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from "styled-components";
import theme from "./theme/theme";

import Box from "@mui/material/Box";
import './assests/scss/layout.scss'

import Header from "./layout/Header";
import Page from "./layout/Page";

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Box className="app-layout">
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
