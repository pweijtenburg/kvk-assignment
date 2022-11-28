import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import CompanySearch from '../pages/Companies/CompanySearch';
import PageNotFound from '../pages/PageNotFound';
import AddCompany from "../components/Companies/Forms/CompanyNew";
import CompanyDetail from "../pages/Companies/CompanyDetail";
import CompanyDetailAll from "../pages/Companies/CompanyDetailAll";

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
        /*
         * NOTE: There is a bug that because of fetchCompanies in /companies, the result gets overwritten when coming from /companies/:id!
         */
        path: "/companies/:id",
        element: <CompanyDetail />,
    }, {
        /*
         * NOTE: There is a bug that because of fetchCompanies in /companies, the result gets overwritten when coming from /companies/:id/detail!
         */
        path: "/companies/:id/detail",
        element: <CompanyDetailAll />,
    }, {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;