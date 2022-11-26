import * as actionTypes from "./actionTypes"

export function fetchCompanies() {
    return (dispatch: DispatchType) => fetch('https://617c09aad842cf001711c200.mockapi.io/v1/companies').then(response => {
        return response.json().then(payload => {
            return dispatch({
                type: actionTypes.FETCH_COMPANIES,
                companies: payload.data.map((company: Company) => ({
                    ...company,
                    id: parseInt(String(company.id), 10),
                }))
            })
        })
    })
}

export function addCompany(company: Company) {
    return (dispatch: DispatchType) => dispatch({
        type: actionTypes.ADD_COMPANY,
        company,
    })
}

export function removeCompany(company: Company) {
    return (dispatch: DispatchType) => dispatch({
        type: actionTypes.REMOVE_COMPANY,
        company,
    })
}
