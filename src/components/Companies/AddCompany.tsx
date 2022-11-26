import * as React from "react"
import {Button, TextField} from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";

type Props = {
    saveCompany: (company: Company | any) => void
}

export default ({saveCompany}: Props) => {
    const [company, setCompany] = React.useState<Company | null>(null)

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCompany({
            id: -1,
            name: "Unnamed company",
            ...company,
            [e.target.id]: e.target.value,
        })
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        saveCompany(company)
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

    return (
        <form id="company_form" onSubmit={submitHandler} className="new-company-form">
            <TextField required id="name" label="Company Name" onChange={inputHandler} value={company?.name} />
            <TextField id="streetName" label="e.g. 5th Avenue 2005" onChange={inputHandler} value={company?.streetName} />
            <TextField id="city" label="City" onChange={inputHandler} value={company?.city} />
            <TextField id="zipCode" label="Postal code" onChange={inputHandler} value={company?.zipCode} />
            <TextField id="logo" label="e.g. https://kompany.nl/our-logo.png" onChange={inputHandler} value={company?.logo} />
            <Button type="submit" className="search-action" disabled={!company} variant="contained" color="success" disableElevation>
                <AddCircle />
                Add Company
            </Button>
        </form>
    )
}
