import React, {ReactNode} from "react";
import {styled} from '@mui/material/styles';

interface Props {
    children?: ReactNode
}

const DefaultPage = styled('main')(({theme}) => ({}));

const Page = ({children, ...props}: Props) => {
    return (
        <DefaultPage>
            {children}
        </DefaultPage>
    );
}

export default Page;
