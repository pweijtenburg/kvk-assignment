import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from 'react-router-dom';
import {Button, Grid} from "@mui/material";
import SearchSpinner from "./SearchSpinner";
import {ArrowBack} from "@mui/icons-material";

export default () => {
    const [company, setCompanyExtra] = useState<Company | null>(null)

    const params = useParams();
    const navigate = useNavigate()

    const goBackHandler = (index: number = -1) => {
        navigate(index)
        return false
    };

    // Fetch extra details
    useEffect(() => {
        fetch(`https://617c09aad842cf001711c200.mockapi.io/v1/companies/${params.id}`)
            .then(response => response.json())
            .then(payload => fetch(`https://617c09aad842cf001711c200.mockapi.io/v1/companies/${params.id}/details`)
                .then(response => response.json())
                .then(payloadExtra => setCompanyExtra({
                        ...payload.data,
                        ...payloadExtra.data[0],
                        id: parseInt(String(payload.data.id), 10),
                    })
                )
            )
    }, [])

    return company ? (
        <div id={`company_${company.id}`} className="company">
            <img src={company.logo} alt={company.name} />
            <div>
                <h1>{company.name}</h1>
                <p><small><i><b>{company.catchPhrase}</b></i></small></p>
                <p>{company.streetName}, {company.zipCode}, {company.city}</p>
                <p><b>Website:</b> <a href={company.website} target="_blacnk">{company.website}</a></p>
                <p><b>Contact:</b> {company.phoneNumber}</p>
            </div>
            <Grid container>
                <Grid item xs={6}>
                    <Button className="back-action" variant="contained" onClick={() => goBackHandler()} disableElevation>
                        <ArrowBack />
                        Back
                    </Button>
                </Grid>
            </Grid>
        </div>
    ) : <SearchSpinner />
}
