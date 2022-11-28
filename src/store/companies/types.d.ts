interface Company {
    id: number
    name: string
    city?: string
    zipCode?: string
    streetName?: string
    logo?: string
    createdAt?: string
    catchPhrase?: string
    website?: string
    phoneNumber?: string
}

type CompaniesState = {
    companies: Company[]
}

type CompanyAction = {
    type: string
    companies?: Company[] // many
    company?: Company // one
}

type DispatchType = (payload: CompanyAction) => CompanyAction
