import React, {ReactNode} from "react";
import {styled} from '@mui/material/styles';

interface Props {
    children?: ReactNode
}

const DefaultHeader = styled('header')(({theme}) => ({
    display: 'flex',
    flexFlow: 'row nowrap',
    borderBottom: '4px solid #00526e',
    padding: '0.7rem 1rem',
    color: '#00526e',
}));

const Header = ({children, ...props}: Props) => {
    return (
        <DefaultHeader>
            {children}
        </DefaultHeader>
    );
}

export default Header;
