import * as actionTypes from "./actionTypes"

const initialState: CompaniesState = {
    companies: [{
        id: 1,
        name: "Wintheiser Group",
        city: "West Esteban",
        zipCode: "97018",
        streetName: "Lilly View",
        logo: "https://via.placeholder.com/150",
        createdAt: "2021-07-16T19:41:28.272Z"
    }, {
        id: 2,
        name: "Feest, Schinner and Lowe",
        city: "New Ahmad",
        zipCode: "07811",
        streetName: "Bartell Tunnel",
        logo: "https://via.placeholder.com/150",
        createdAt: "2021-10-03T18:37:01.931Z"
    }]
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
