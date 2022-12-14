import React, {ReactNode} from "react";
import {styled} from '@mui/material/styles';

import {Typography} from "@mui/material";

interface Props {
    children?: ReactNode
}

const Header = styled('header')(({theme}) => ({
    display: 'flex',
    flexFlow: 'row nowrap',
    borderBottom: '4px solid #00526e',
    padding: '0.7rem 1rem',

    '.brand-logo': {
        fontWeight: 700,
        color: '#00526e',
    }
}));

export default ({children}: Props) => {
    return (
        <Header>
            <Typography className="brand-logo" variant="h6">Kompany</Typography>
            {children}
        </Header>
    );
}
