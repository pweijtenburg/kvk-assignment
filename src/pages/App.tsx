import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';

const PageContainer = styled(Container)(({theme}) => ({
    paddingTop: theme.spacing(2),
}));

const App = () => {
    return (
        <PageContainer>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    Invoerveld
                </Grid>
                <Grid item xs={3}>
                    Zoeken
                </Grid>
                <Grid item xs={12}>
                    Resultaten
                </Grid>
            </Grid>
        </PageContainer>
    );
}

export default App;
