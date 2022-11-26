import * as React from "react"
import {Button, TextField} from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import {ChangeEvent} from "react";

type Props = {
    saveCompany: (company: Company | any) => void
}

const AddCompany = ({saveCompany}: Props) => {
    const [company, setCompany] = React.useState<Company | {}>()

    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setCompany({
            ...company,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const addNewHandler = (e: React.FormEvent) => {
        e.preventDefault()
        saveCompany(company)
    }

    return (
        <form onSubmit={addNewHandler} className="new-company-form">
            <TextField required id="name" label="Company Name" onChange={inputHandler} />
            <TextField id="streetName" label="e.g. 5th Avenue 2005" onChange={inputHandler} />
            <TextField id="city" label="City" onChange={inputHandler} />
            <TextField id="zipCode" label="Postal code" onChange={inputHandler} />
            <TextField id="logo" label="e.g. https://kompany.nl/our-logo.png" onChange={inputHandler} />
            <Button className="search-action" disabled={!company} variant="contained" color="success" disableElevation>
                <AddCircle />
                Add Company
            </Button>
        </form>
    )
}

export default AddCompany