import * as React from "react"

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
            <input type="text" id="name" placeholder="Company Name" onChange={inputHandler} />
            <input type="text" id="streetName" placeholder="e.g. 5th Avenue 2005" onChange={inputHandler} />
            <input type="text" id="city" placeholder="City" onChange={inputHandler} />
            <input type="text" id="zipCode" placeholder="Postal code" onChange={inputHandler} />
            <input type="text" id="logo" placeholder="e.g. https://kompany.nl/our-logo.png" onChange={inputHandler} />
            <button disabled={!company}>Add Company</button>
        </form>
    )
}

export default AddCompany