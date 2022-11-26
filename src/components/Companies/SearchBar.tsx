import React, {MouseEventHandler} from "react";
import {styled} from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import {Autocomplete, Button, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    onSearch?: MouseEventHandler
}

const DefaultSearchBar = styled(Grid)(({theme}) => ({
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
        width: '100%',
    }
}));

export default ({onSearch}: Props) => {
    return (
        <DefaultSearchBar container className="search-input-wrapper" spacing={2}>
            <Grid item xs={8} md={9} lg={10}>
                <Autocomplete
                    disablePortal
                    id="searchInput"
                    className="search-input"
                    options={[]}
                    renderInput={(params) => <TextField {...params} label="Type your query" />}
                />
            </Grid>
            <Grid container item xs={4} md={3} lg={2}>
                <Button className="search-action" variant="contained" color="secondary" onClick={onSearch} disableElevation>
                    <SearchIcon />
                    Search
                </Button>
            </Grid>
        </DefaultSearchBar>
    );
}
