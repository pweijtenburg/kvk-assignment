import React from 'react';
import Container from '@mui/material/Container';
import {styled} from '@mui/material/styles';
import SearchBar from "../components/CompanySearch/SearchBar";
import SearchList from "../components/CompanySearch/SearchList";

const PageContainer = styled(Container)(({theme}) => ({
    paddingTop: theme.spacing(2),
}));

const CompanySearch = () => {
    return (
        <PageContainer>
            <SearchBar />
            <SearchList list={['Result 1', 'Result 2', 'Result 3']} />
        </PageContainer>
    );
}

export default CompanySearch;
