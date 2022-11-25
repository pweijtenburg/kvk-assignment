import React, {MouseEventHandler} from "react";
import {styled} from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import {Autocomplete, Button, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    onSearch?: MouseEventHandler
}

const DefaultSearchBar = styled(Grid)(({theme}) => ({
    display: 'flex',
    flexFlow: 'row nowrap',
    flex: '1',
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
        backgroundColor: '#aa418c',
        fontSize: 'inherit',
        fontWeight: '400',
        textTransform: 'initial',
        border: '2px solid #aa418c',
        width: '100%',
        height: '100%',
    }
}));

const SearchBar = ({onSearch}: Props) => {
    return (
        <DefaultSearchBar container className="search-input-wrapper" spacing={2}>
            <Grid item xs={10}>
                <Autocomplete
                    disablePortal
                    id="searchInput"
                    className="search-input"
                    options={[]}
                    renderInput={(params) => <TextField {...params} label="Type your query" />}
                />
            </Grid>
            <Grid item xs={2}>
                <Button className="search-action" variant="contained" color="secondary" onClick={onSearch}>
                    <SearchIcon />
                    Search
                </Button>
            </Grid>
        </DefaultSearchBar>
    );
}

export default SearchBar;
