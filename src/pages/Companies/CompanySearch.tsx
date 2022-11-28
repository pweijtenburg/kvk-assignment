import React, {ChangeEvent, useCallback, useEffect, useState} from "react"
import {Dispatch} from "redux"
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import {addCompany, fetchCompanies} from "../../store/companies/actions"
import Container from '@mui/material/Container';
import {styled} from '@mui/material/styles';
import SearchBar from "../../components/Companies/SearchBar";
import SearchList from "../../components/Companies/SearchList";
import AddCompany from "../../components/Companies/AddCompany"
import SearchSpinner from "../../components/Companies/SearchSpinner";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PageContainer = styled(Container)(({theme}) => ({
    paddingTop: theme.spacing(2),
}));

export default () => {
    const [page, setPage] = useState(1);
    const companies: Company[] = useSelector((state: CompaniesState) => state.companies, shallowEqual)

    const itemsPerPage = 7 // bit hacky but should be in redux
    const pages = Math.ceil(companies.length / itemsPerPage)

    const paginationHandler = (e: ChangeEvent<any>, page: number) => {
        setPage(page);
    };

    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        dispatch(fetchCompanies())
    }, [dispatch])

    const saveCompany = useCallback((company: Company) => dispatch(addCompany(company)), [dispatch])

    return (
        <PageContainer>
            <SearchBar />
            {companies.length
                ?
                <>
                    <SearchList list={companies.slice((page - 1) * itemsPerPage, page * itemsPerPage)} />
                    <Stack spacing={2} alignItems="center">
                        <Pagination count={pages} page={page} variant="outlined" shape="rounded" onChange={paginationHandler} />
                    </Stack>
                </>
                :
                <SearchSpinner />
            }
            <AddCompany saveCompany={saveCompany} />
        </PageContainer>
    );
}
