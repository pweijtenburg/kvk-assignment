import {applyMiddleware, createStore, Store} from "redux"
import thunk from "redux-thunk"

import companyReducer from "./companies/reducer"

const store: Store<CompaniesState, CompanyAction> & {
    dispatch: DispatchType
} = createStore(companyReducer, applyMiddleware(thunk))

export default store