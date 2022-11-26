import React from "react";
import {styled} from '@mui/material/styles';
import SearchListItem from "./SearchListItem";

interface Props {
    list: string[]
}

const DefaultSearchList = styled('ul')(({theme}) => ({
    listStyle: 'none',
    margin: '1rem 0',
    padding: '0',
}));

const SearchList = ({list}: Props) => {
    return (
        <DefaultSearchList>
            {list.map(item => <SearchListItem text={item} />)}
        </DefaultSearchList>
    );
}

export default SearchList;
