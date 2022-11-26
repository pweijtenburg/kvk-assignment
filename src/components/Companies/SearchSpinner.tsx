import React from "react";
import {styled} from '@mui/material/styles';
import SpinnerIcon from '@mui/icons-material/Cached';
import {Grid} from "@mui/material";

const SearchSpinner = styled(Grid)(({theme}) => ({
    textAlign: 'center',
    border: '2px solid #f2f2f2',
    borderRadius: '4px',
    margin: '1rem 0',
    padding: '1rem',

    '.MuiSvgIcon-root': {
        animation: "spin .6s linear infinite",
        width: '2.5em',
        height: '2.5em',
    }
}));

export default () => {
    return (
        <SearchSpinner>
            <SpinnerIcon />
        </SearchSpinner>
    );
}
