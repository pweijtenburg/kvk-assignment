import React from "react";
import {createBrowserRouter} from "react-router-dom";

import CompanySearch from '../pages/Companies/CompanySearch';
import PageNotFound from '../pages/PageNotFound';
import CompanyDetail from "../components/Companies/CompanyDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CompanySearch />,
    }, {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;