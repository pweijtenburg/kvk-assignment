import React, {useCallback, useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {Dispatch} from "redux"
import {useNavigate, useParams} from 'react-router-dom';
import {Button, Grid} from "@mui/material";
import {removeCompany} from "../../store/companies/actions";
import SearchSpinner from "../../components/Companies/SearchSpinner";
import {ArrowBack, RemoveCircle} from "@mui/icons-material";

export default () => {
    const [company, setCompany] = useState<Company | null>(null)

    const params = useParams();
    const dispatch: Dispatch<any> = useDispatch()

    const navigate = useNavigate()

    // One way is to get the company from redux
    // const companies: Company[] = useSelector((state: CompaniesState) => state.companies, shallowEqual)

    // BUT for this demo we get it using another API call...
    // Future feature: Add the item to redux...
    useEffect(() => {
        fetch(`https://617c09aad842cf001711c200.mockapi.io/v1/companies/${params.id}`)
            .then(response => response.json())
            .then(payload => setCompany({
                    ...payload.data,
                    id: parseInt(String(payload.data.id), 10),
                })
            )
    }, [])

    // OPTIONAL: This works, except there is a bug when going back it loses its state
    const deleteHandler = useCallback((company: Company) => {
            dispatch(removeCompany(company))

            navigate('/companies')
            // - or -
            // navigate(-1)
            // idealy you would want to return keeping al Query parameters like ?page=N
        },
        [dispatch, removeCompany]
    )

    return company ? (
        <div className="company-details">
            <img src={company.logo} alt={company.name} />
            <div>
                <h1>{company.name}</h1>
                <p>{company.streetName}, {company.zipCode}, {company.city}</p>
            </div>
            <Grid container>
                <Grid item xs={6}>
                    <Button className="back-action" variant="contained" onClick={() => navigate(-1)} disableElevation>
                        <ArrowBack />
                        Back
                    </Button>
                </Grid>
                {/*<Grid item xs={6} container justifyContent="flex-end">*/}
                {/*    <Button className="delete-action" variant="outlined" color="error" onClick={() => deleteHandler(company)} disableElevation>*/}
                {/*        <RemoveCircle />*/}
                {/*        Delete*/}
                {/*    </Button>*/}
                {/*</Grid>*/}
            </Grid>
        </div>
    ) : <SearchSpinner />
}
