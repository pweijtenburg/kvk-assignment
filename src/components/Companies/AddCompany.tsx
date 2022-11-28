import React, {ChangeEvent, FormEvent, useState} from "react"
import {Dispatch} from "redux"
import {Button, Grid, TextField} from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import {styled} from "@mui/material/styles";
import {addCompany} from "../../store/companies/actions";
import {useDispatch} from "react-redux";

const Form = styled('form')(({theme}) => ({
    paddingTop: theme.spacing(2),
}));


export default () => {
    const [company, setCompany] = useState<Company | null>(null)

    const dispatch: Dispatch<any> = useDispatch()

    const inputHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCompany({
            id: -1,
            name: "Unnamed company",
            ...company,
            [e.target.id]: e.target.value,
        })
    }

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        if (company) {
            dispatch(addCompany(company))
            setCompany({
                city: "",
                id: -1,
                logo: "",
                name: "",
                streetName: "",
                zipCode: "",
                createdAt: (new Date).toISOString(),
            })
        }
    }

    return (
        <Form id="company_form" onSubmit={submitHandler} className="new-company-form">
            <Grid container>
                <Grid item xs={12}>
                    <TextField fullWidth required id="name" label="Company Name" onChange={inputHandler} value={company?.name} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="streetName" label="e.g. 5th Avenue 2005" onChange={inputHandler} value={company?.streetName} />
                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth id="zipCode" label="Postal code" onChange={inputHandler} value={company?.zipCode} />
                </Grid>
                <Grid item xs={8}>
                    <TextField fullWidth id="city" label="City" onChange={inputHandler} value={company?.city} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="logo" label="e.g. https://kompany.nl/our-logo.png" onChange={inputHandler} value={company?.logo} />
                </Grid>
                <Grid item xs={12}>
                    <br />
                    <Button type="submit" className="search-action" disabled={!company} variant="contained" color="success" disableElevation>
                        <AddCircle />
                        Add Company
                    </Button>
                </Grid>
            </Grid>
        </Form>
    )
}
