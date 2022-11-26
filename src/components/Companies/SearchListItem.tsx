import React, {ReactNode} from "react";
import {styled} from '@mui/material/styles';

interface Props {
    children?: ReactNode
}

const DefaultSearchListItem = styled('li')(({theme}) => ({
    border: '2px solid #f2f2f2',
    padding: '0.7rem 1rem',

    '&:first-child ': {
        borderRadius: '4px 4px 0 0',
    },
    '&:last-child': {
        borderRadius: '0 0 4px 4px',
    },

    '+ li': {
        borderTop: '0',
    },
}));

export default ({children}: Props) => {
    return (
        <DefaultSearchListItem>
            {children}
        </DefaultSearchListItem>
    );
}

