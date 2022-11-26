import React, {ReactNode} from "react";
import {styled} from '@mui/material/styles';

interface Props {
    children?: ReactNode
}

const DefaultPage = styled('main')(({theme}) => ({
    display: 'flex',
    flexFlow: 'column nowrap',
    flex: '1',
    margin: '1rem',
}));

export default ({children}: Props) => {
    return (
        <DefaultPage>
            {children}
        </DefaultPage>
    );
}
