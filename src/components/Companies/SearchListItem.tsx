import React from "react";
import {styled} from '@mui/material/styles';
import {Dispatch} from "redux"
import {useDispatch} from "react-redux"

import {Avatar, Button, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import RemoveCircle from "@mui/icons-material/RemoveCircleOutline";

type Props = {
    company: Company
    removeCompany: (company: Company) => void
    onClick: (company: Company) => void
}

const SearchListItem = styled(ListItem)(({theme}) => ({
    border: '2px solid #f2f2f2',
    cursor: 'pointer',

    '&:first-child ': {
        borderRadius: '4px 4px 0 0',
    },
    '&:last-child': {
        borderRadius: '0 0 4px 4px',
    },

    '+ li': {
        borderTop: '0',
    },
}));

export default ({company, removeCompany, onClick}: Props) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deleteHandler = React.useCallback(
        (company: Company) => dispatch(removeCompany(company)),
        [dispatch, removeCompany]
    )

    return (
        <SearchListItem alignItems="flex-start">
            <ListItemAvatar onClick={() => onClick(company)}>
                <Avatar src={company.logo} alt={company.name} />
            </ListItemAvatar>
            <ListItemText onClick={() => onClick(company)}>
                <strong>{company.name}</strong>
                <br />
                <small>{company.streetName}, {company.zipCode}, {company.city}</small>
            </ListItemText>
            <Button className="delete-action" variant="outlined" color="error" onClick={() => deleteHandler(company)} disableElevation>
                <RemoveCircle />
                Delete
            </Button>
        </SearchListItem>
    )
}
