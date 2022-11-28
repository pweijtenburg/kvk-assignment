import React from "react";
import {createBrowserRouter} from "react-router-dom";

import CompanySearch from '../pages/Companies/CompanySearch';
import PageNotFound from '../pages/PageNotFound';
import AddCompany from "../components/Companies/AddCompany";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CompanySearch />,
    }, {
        //     path: "/companies/:id",
        //     element: <CompanyDetail />,
        // }, {
        //     path: "/companies/:id/details",
        //     element: <CompanyDetail />,
        // }, {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;