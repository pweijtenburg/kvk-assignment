import * as React from "react"
import {Dispatch} from "redux"
import {useDispatch} from "react-redux"

type Props = {
    company: Company
    removeCompany: (company: Company) => void
}

const Company = ({company, removeCompany}: Props) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deleteHandler = React.useCallback(
        (company: Company) => dispatch(removeCompany(company)),
        [dispatch, removeCompany]
    )

    return (
        <div id={`company_${company.id}`} className="company">
            <img src={company.logo} alt={company.name} />
            <div>
                <h1>{company.name}</h1>
                <p>{company.streetName}, {company.zipCode}, {company.city}</p>
            </div>
            <button onClick={() => deleteHandler(company)}>Delete</button>
        </div>
    )
}

export default Company