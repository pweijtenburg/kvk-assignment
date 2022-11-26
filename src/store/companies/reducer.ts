import * as actionTypes from "./actionTypes"

const initialState: CompaniesState = {
    companies: []
}

export default (state: CompaniesState = initialState, action: CompanyAction): CompaniesState => {
    switch (action.type) {
        case actionTypes.FETCH_COMPANIES:
            return <CompaniesState>{
                ...state,
                companies: action.companies,
            }
        case actionTypes.ADD_COMPANY:
            const autoId = Math.random()
            return <CompaniesState>{
                ...state,
                companies: state.companies.concat({
                    id: autoId,
                    name: `Unnamed company ${autoId}`,
                    ...action.company
                }),
            }
        case actionTypes.REMOVE_COMPANY:
            return <CompaniesState>{
                ...state,
                companies: state.companies.filter((company: Company) => company.id !== action.company?.id),
            }
    }
    return state
}
