import React, {ChangeEvent, useEffect, useState} from "react"
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import {Dispatch} from "redux"
import {useSearchParams} from "react-router-dom";
import {fetchCompanies} from "../../store/companies/actions"
import {styled} from '@mui/material/styles';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import SearchBar from "../../components/Companies/SearchBar";
import SearchList from "../../components/Companies/SearchList";
import AddCompany from "../../components/Companies/Forms/CompanyNew"
import SearchSpinner from "../../components/Companies/SearchSpinner";
import Pagination from '@mui/material/Pagination';

const PageContainer = styled(Container)(({theme}) => ({
    paddingTop: theme.spacing(2),
}));

export default () => {
    const [searchParams] = useSearchParams(); // Todo
    // console.log(searchParams.get('sort')); // e.g. for sorting
    // console.log(searchParams.get('page')); // e.g. for keeping track of paging

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

    return (
        <PageContainer>
            <section>
                <SearchBar />
            </section>
            <section>
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
            </section>
            <section>
                <AddCompany />
            </section>
        </PageContainer>
    );
}
