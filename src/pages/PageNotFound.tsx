import * as React from 'react';
import {useNavigate} from "react-router-dom";
import {styled} from '@mui/material/styles';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const PageContainer = styled(Container)(({theme}) => ({
    textAlign: 'center',
    paddingTop: theme.spacing(2),
}));

export default () => {
    const navigate = useNavigate()

    const goBackHandler = (index: number = -1) => {
        navigate(index)
        return false
    };

    return (
        <PageContainer>
            <Typography variant="h4">404 - Page Not Found</Typography>
            <p>
                <a href="#" onClick={() => goBackHandler()}>Go back</a>
            </p>
        </PageContainer>
    );
}
