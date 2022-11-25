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

const Page = ({children, ...props}: Props) => {
    return (
        <DefaultPage>
            {children}
        </DefaultPage>
    );
}

export default Page;
