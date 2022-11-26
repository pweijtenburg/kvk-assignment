import React from "react";
import {styled} from '@mui/material/styles';
import SearchListItem from "./SearchListItem";
import {removeCompany} from "../../store/companies/actions";
import {List} from "@mui/material";

interface Props {
    list: Company[]
}

const SearchList = styled(List)(({theme}) => ({
    listStyle: 'none',
    margin: '1rem 0',
    padding: '0',
}));

export default ({list}: Props) => {
    return (
        <SearchList>
            {list.map((company: Company) => (
                <SearchListItem key={company.id}
                                company={company}
                                removeCompany={removeCompany}
                />
            ))}
        </SearchList>
    );
}
