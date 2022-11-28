import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import CompanySearch from '../pages/Companies/CompanySearch';
import PageNotFound from '../pages/PageNotFound';
import AddCompany from "../components/Companies/AddCompany";
import CompanyDetail from "../components/Companies/CompanyDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/companies" replace />,
    }, {
        path: "/companies",
        element: <CompanySearch />,
    }, {
        /*
         * NOTE: There is a bug that because of fetchCompanies in /companies, the result gets overwritten when coming from /companies/new!
         */
        path: "/companies/new",
        element: <AddCompany />,
    }, {
        path: "/companies/:id",
        element: <CompanyDetail />,
    }, {
        //     path: "/companies/:id/details",
        //     element: <CompanyDetail />,
        // }, {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;