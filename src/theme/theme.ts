import {createTheme, responsiveFontSizes} from '@mui/material/styles';

export interface CustomTheme {
    props: Object,
    overrides: Object,
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#007aa3',
        },
        secondary: {
            main: '#aa418c',
        },
        background: {
            default: '#eee',
            paper: '#fff',
        },
        warning: {
            main: '#ff9300',
        },
        error: {
            main: '#ea3838',
        },
        info: {
            main: '#0070b9',
        },
        success: {
            main: '#00a662',
        },
        divider: 'rgba(0,0,0,0.1)',
    },
    typography: {
        fontWeightLight: 300,
        fontWeightRegular: 300,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontFamily: [
            'Poppins',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        button: {
            fontWeight: 500,
            fontSize: 16,
            textTransform: 'initial',
        }
    },
    spacing: 8,
    shape: {
        borderRadius: 4,
    },
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
        MuiAppBar: {
            color: 'inherit',
        },
    },
    overrides: {
        MuiAppBar: {
            colorInherit: {
                backgroundColor: '#fff',
                color: '#000',
            },
        },
    },
});

export default responsiveFontSizes(theme);