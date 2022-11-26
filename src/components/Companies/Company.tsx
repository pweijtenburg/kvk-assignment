import * as React from "react"
import {Dispatch} from "redux"
import {useDispatch} from "react-redux"
import {Button} from "@mui/material";
import RemoveCircle from "@mui/icons-material/RemoveCircleOutline";

type Props = {
    company: Company
    removeCompany: (company: Company) => void
}

export default ({company, removeCompany}: Props) => {
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
            <Button className="search-action" variant="outlined" color="error" onClick={() => deleteHandler(company)} disableElevation>
                <RemoveCircle />
                Delete
            </Button>
        </div>
    )
}
