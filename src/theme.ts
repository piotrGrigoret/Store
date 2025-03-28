import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8E2A7E',
      light: '#B356A5',
      dark: '#6A1F5F',
    },
    secondary: {
      main: '#FFFFFF',
      dark: '#F3F3F5',
    },
    background: {
      default: '#242424',
      paper: '#353434',
    },
  },

  components: {
    MuiCardActions: {
      styleOverrides: {
        root: {
          color: 'white',
          textTransform: 'none',
          transition: 'all 0.3s ease',
          cursor:'pointer',
          '&:hover': {
            backgroundColor: 'rgba(179, 86, 165, 0.2)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          textTransform: 'none',
          transition: 'all 0.3s ease',

          '&:hover': {
            backgroundColor: 'rgba(179, 86, 165, 0.2)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },


    MuiCardActionArea: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',

          '&:hover': {
              backgroundColor: 'rgba(179, 86, 165, 0.1)',
              // boxShadow: '0 4px 6px rgba(179, 86, 165, 0.3)',
          },

          '&:hover .MuiCardMedia-root': {
            transform: 'scale(1.05)',
            transition: 'all 0.3s ease',
          },
        },
      },
    },

    MuiInput:{
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
          color: '#FFFFFF',
          borderBottom:'#FFFFFF',
          '&:before': {
            borderBottom: '2px solid #FFFFFF',
          },
          
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid #F3F3F5',
          },
        },
      }, 
    },

    MuiMenuItem:{
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',

          color:'#F3F3F5',
          fontFamily:'Montserrat',
          
          '&:hover': {
              backgroundColor: 'rgba(179, 86, 165, 0.1)',
              transform: 'scale(1.05)',

          },

        MuiTypography:{
          styleOverrides: {
            root: {
              fontFamily:'Montserrat',

            }
          }
        }
        } 
      }
    }
  },
});

export default theme;
