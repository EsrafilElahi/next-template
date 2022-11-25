import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  // direction: 'rtl',

  palette: {
    primary: {
      main: "#3fa9f5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#858fad",
    },
    border: {
      main: "#d6cfcf",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 974,
      xl: 1440,
    },
  },

  typography: {},
});

theme = createTheme(theme, {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-input": {
            paddingTop: "13px",
            paddingBottom: "13px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: ".6em",
          },
          "& label": {
            fontSize: '14px',
            color: '#898484',
            "&.Mui-focused": {
              fontSize: '15px',
              padding: '0 3px !important'
            },
          }
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          fontSize: '1rem',
          padding: '.5rem 1.5em',
          borderRadius: '.3rem',
          textTransform: "none",
          [theme.breakpoints.down('md')]: {
            padding: '.65rem 1.5em',
          }
        },
        outlined: {
          fontSize: '1rem',
          padding: '.6rem 1.5em',
          borderRadius: '.3rem',
          [theme.breakpoints.down('md')]: {
            padding: '.75rem 1.5em',
          }
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-input": {
            padding: ".8em 1.5em",
          },
          [theme.breakpoints.down('md')]: {
            "& .MuiOutlinedInput-input": {
              padding: "1em 1.5em",
            },
          },
          "& .css-1bqf5hf-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
            padding: "0 0.5em",
            background: "white",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: ".6em",
          },

        },
      },
    },

  },
});

theme = responsiveFontSizes(theme);
export default theme;
