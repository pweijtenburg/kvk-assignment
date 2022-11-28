import React, {MouseEventHandler, SyntheticEvent, useState} from "react";
import {styled} from '@mui/material/styles';
import {throttle} from "lodash-es";

import {Autocomplete, Button, Grid, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

declare global {
    interface Window {
        controller: AbortController
        signal: AbortSignal
    }
}

interface Props {
    onSearch?: MouseEventHandler
}

const SearchBar = styled(Grid)(({theme}) => ({
    '.search-input': {
        'fieldset': {
            border: '2px solid #eee',
        },
        '&.Mui-focused': {
            'fieldset': {
                borderColor: '#aa418c',
            },
            '.MuiInputLabel-formControl': {
                color: '#aa418c',
            }
        }
    },
    '.search-action': {
        border: '2px solid #aa418c',
    }
}));

export default ({onSearch}: Props) => {
    const [list, setList] = useState([]);

    const searchQueryHandler = throttle((event: SyntheticEvent, query: string) => {
        if (query) {
            if (window.controller) {
                window.controller.abort()
            }
            window.controller = new AbortController()
            window.signal = window.controller.signal

            fetch('https://617c09aad842cf001711c200.mockapi.io/v1/companies?search=' + query, {
                signal: window.signal,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
                .then(response => response.json())
                .then(payload => {
                    const updatedList = payload.data.map((company: Company) => ({
                        ...company,
                        id: parseInt(String(company.id), 10),
                    }))
                    setList(updatedList);
                })
        } else {
            setList([]);
        }
    }, 1000)

    return (
        <SearchBar container className="search-input-wrapper" spacing={2}>
            <Grid item xs={8} md={9} lg={10}>
                <Autocomplete
                    disablePortal
                    id="searchInput"
                    options={list}
                    onInputChange={searchQueryHandler}
                    getOptionLabel={(company: Company) => company.name}
                    fullWidth
                    renderInput={(params) => <TextField {...params} label="Type your query" />}
                />
            </Grid>
            <Grid container item xs={4} md={3} lg={2}>
                <Button fullWidth className="search-action" variant="contained" color="secondary" onClick={onSearch} disableElevation>
                    <SearchIcon />
                    <span className="hide-on-mobile">Search</span>
                </Button>
            </Grid>
        </SearchBar>
    );
}
