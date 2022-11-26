import * as React from "react"
import {Dispatch} from "redux"
import {useSelector, shallowEqual, useDispatch} from "react-redux"
import {addCompany, fetchCompanies, removeCompany} from "../../store/companies/actions"
import Container from '@mui/material/Container';
import {styled} from '@mui/material/styles';
import SearchBar from "../../components/Companies/SearchBar";
import SearchList from "../../components/Companies/SearchList";
import Company from "../../components/Companies/Company"
import AddCompany from "../../components/Companies/AddCompany"
import {useEffect} from "react";

const PageContainer = styled(Container)(({theme}) => ({
    paddingTop: theme.spacing(2),
}));

export default () => {
    const companies: Company[] = useSelector((state: CompaniesState) => state.companies, shallowEqual)

    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        dispatch(fetchCompanies())
    }, [dispatch])

    const saveCompany = React.useCallback((company: Company) => dispatch(addCompany(company)), [dispatch])

    return (
        <PageContainer>
            <SearchBar />
            <SearchList list={companies} />
            <AddCompany saveCompany={saveCompany} />
        </PageContainer>
    );
}
